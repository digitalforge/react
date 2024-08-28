import { useState, useEffect } from 'react'

const KEY = 'b83ec059'

export function useMovies(query, callback) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    //const controller = new AbortController()
    callback?.()
    async function fetchMovies() {
      try {
        setError('')
        setIsLoading(true)
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        )

        if (!res.ok)
          throw new Error('Something went wrong with fetching movies')

        const data = await res.json()
        if (data.Response === 'False') throw new Error('Movie not found')
        setMovies(data.Search)
        setIsLoading(false)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    if (query.length < 3) {
      setMovies([])
      setError('')
      return
    }

    //handleCloseMovie()
    // fetchMovies()

    const timer = setTimeout(fetchMovies, 500)

    //cleanup function
    return () => clearTimeout(timer)
  }, [query, callback])

  return { movies, isLoading, error }
}
