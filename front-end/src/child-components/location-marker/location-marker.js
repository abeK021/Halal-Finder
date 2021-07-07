import { useState, useRef } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import postalCodePrefix from '@iconify-icons/map/postal-code-prefix';
import { Overlay, Tooltip } from 'react-bootstrap';

import './location-marker.css'




const LocationMarker = ({info, onClick}) => {

  const target = useRef(null)
  const [show, setShow] = useState(false)

  const tooltip = (
    <Tooltip id="overlay" {...info}>
      Tooltip
    </Tooltip>
  )

  return ( 
    <div ref={target} className="location-marker" onClick={() =>setShow(!show)} > 
      <Icon onClick={onClick}  icon={postalCodePrefix} className="location-icon" ></Icon>
    </div>
    
  )
}

export default LocationMarker