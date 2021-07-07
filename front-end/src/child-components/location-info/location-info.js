import { Table, Button } from 'react-bootstrap'
import webIcon from '../../images/browser-icon.png'
import navIcon from '../../images/navigation-icon.png'
import phoneIcon from '../../images/phone-icon.png'

import './location-info.css'

const LocationInfoBox = ({info}) => {

  const googleMaps = `https://maps.google.com/?q=${info.geo.lat}, ${info.geo.lng}, `

  return (
    <div className="table">
    <Table className="table-container">

      <tr className="row">
        <th className="col table-top-left">
          <div className="img-container text-center">
            <a href={info.website} target="_blank" rel="noreferrer">
              <img src={webIcon} alt=""></img>
            </a>
          </div>
          <h6>{info.name}</h6>
        </th>
        <th className="col table-top-right">
        <div className="img-container text-center" >
        <a href={googleMaps} target="_blank" rel="noreferrer">
        <img src={navIcon} alt=""></img>
          </a>
          </div>
          <h6>{info.address}</h6>
        </th>
       </tr>

       <tr className="row ">
        <th className="col table-bottom-left">
          <div className="img-container text-center">
            <a href={`tel:${info.phone}`}>
            <img src={phoneIcon} alt=""></img>
            </a>
          </div>
          <h6>{info.phone}</h6>
        </th>
        <th className="col table-bottom-right">
        <div className="button-container text-center ">
           <Button  variant="danger">Order</Button>
          </div>
        </th>
       </tr>
    </Table>
    <h6>{info.description}</h6>
    </div>
  )
}

export default LocationInfoBox