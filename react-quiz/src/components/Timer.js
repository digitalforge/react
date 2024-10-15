import { useEffect } from 'react'
import { useQuiz } from '../contexts/QuizContext'

function Timer() {
  const { secondsRemaining, dispatch } = useQuiz()
  const mins = Math.floor(secondsRemaining / 60)
  const secs = Math.floor(secondsRemaining % 60)

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: 'tick' })
      }, 1000)

      return () => clearInterval(id)
    },
    [dispatch, secondsRemaining]
  )
  return (
    <div className='timer'>
      {mins < 10 && '0'}
      {mins}:{secs < 10 && '0'}
      {secs}
    </div>
  )
}

export default Timer
