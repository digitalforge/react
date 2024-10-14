import { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import styles from './Map.module.css'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from 'react-leaflet'
import { useCities } from '../contexts/CitiesContext'
import { useGeolocation } from '../hooks/useGeolocation'
import Button from '../components/Button'
import { useUrlPosition } from '../hooks/useUrlPosition'

import Spinner from './Spinner'

function Map() {
  const { cities } = useCities()
  const [mapPosition, setMapPosition] = useState([40, 0])
  const {
    isLoading: isLoadingPosition,
    position: geoLocationPosition,
    getPosition,
  } = useGeolocation()
  const [mapLat, mapLng] = useUrlPosition()

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng])
  }, [mapLat, mapLng])

  useEffect(
    function () {
      if (geoLocationPosition)
        setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng])
    },
    [geoLocationPosition]
  )

  return (
    <div className={styles.mapContainer}>
      {!geoLocationPosition && (
        <Button type='position' onClick={getPosition}>
          {isLoadingPosition ? 'Getting your location...' : 'Use Your Location'}
        </Button>
      )}

      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={11}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        />
        {cities.map(city => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  )
}

function ChangeCenter({ position, zoom }) {
  const map = useMap()
  map.setView(position, zoom)
  return null
}

function DetectClick() {
  const navigate = useNavigate()
  useMapEvents({
    click: e => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
    },
  })
}

export default Map
