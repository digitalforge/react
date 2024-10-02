import styles from './CountryList.module.css'
import Spinner from './Spinner'
import CountryItem from './CountryItem'
import Message from './Message'
import { useCities } from '../contexts/CitiesContext'

function CountryList() {
  const { cities, isLoading } = useCities()

  if (isLoading) return <Spinner />

  if (!cities.length)
    return (
      <Message message='Add your first city by clicking on a city on the map' />
    )

  const countries = cities.reduce((array, city) => {
    if (!array.map(el => el.country).includes(city.country))
      return [...array, { country: city.country, emoji: city.emoji }]
    else return array
  }, [])

  return (
    <ul className={styles.countryList}>
      {countries.map(country => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  )
}

export default CountryList
