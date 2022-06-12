import { useSelector } from "react-redux"
import './city-location-heading.css'

const CityHeading = () => {

  const city = useSelector(state => state.restaurants.cityState)
  
  return (
    <h6 className="city-heading">
        {city ? city.toUpperCase() : ''}
    </h6>
  )
}

export default CityHeading