import {useState,useCallback} from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '100vh',
  height: '100vh',
}

const center = {
    lat: 31.6858, // Latitude for Hamirpur, Himachal Pradesh
    lng: 76.5250, // Longitude for Hamirpur, Himachal Pradesh
  };
  
function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBFxFZ13aINpUAe-OyYcdEiqZC5xFDpqyU',
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
  ref={(map) => {
    const bounds = new window.google.maps.LatLngBounds()

    map.fitBounds(bounds)
  }}
/>
  ) : (
    <></>
  )
}

export default React.memo(MyComponent)