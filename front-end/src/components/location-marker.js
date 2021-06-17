
import { Icon, InlineIcon } from '@iconify/react';
import postalCodePrefix from '@iconify-icons/map/postal-code-prefix';




const LocationMarker = ({lat, lng, onClick}) => {

  const handlemarkerClick = (e) => {
    console.log(e)
  }

  return (
    <div className="location-marker" onClick={onClick}> 
      <Icon icon={postalCodePrefix} className="location-icon" ></Icon>
    </div>
  )
}

export default LocationMarker