
import { Icon, InlineIcon } from '@iconify/react';
import postalCodePrefix from '@iconify-icons/map/postal-code-prefix';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';




const LocationMarker = ({info, onClick}) => {



  return (
    
  <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}  
  >
    <div className="location-marker" onClick={onClick}> 
      <Icon icon={postalCodePrefix} className="location-icon" ></Icon>
    </div>
  </OverlayTrigger>
    
  )
}

export default LocationMarker