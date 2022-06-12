import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import webIcon from "../../images/browser-icon.png";
import navIcon from "../../images/navigation-icon.png";
import phoneIcon from "../../images/phone-icon.png";

import "./location-info.css";

const LocationInfoBox = ({ info }) => {
  const [googleMaps, setGoogleMaps] = useState();
  useEffect(() => {
    if ("geometry" in info) {
      setGoogleMaps(
        `https://maps.google.com/?q=${info.geometry.location.lat}, ${info.geometry.location.lng}, `
      );
    }
  }, [info]);

  const getUrlOrWebsite = () => ("website" in info ? info.website : info.url);

  return (
    <div className="table location-info-container">
      <Table className="table-container">
        <tr className="row">
          <th className="col table-top-left">
            <div className="img-container text-center">
              <a href={getUrlOrWebsite()} target="_blank" rel="noreferrer">
                <img src={webIcon} alt=""></img>
              </a>
            </div>
            <h6>{info.name}</h6>
          </th>
          <th className="col table-top-right">
            <div className="img-container text-center">
              <a href={googleMaps} target="_blank" rel="noreferrer">
                <img src={navIcon} alt=""></img>
              </a>
            </div>
            <h6>{info.vicinity}</h6>
          </th>
        </tr>

        <tr className="row ">
          <th className="col table-bottom-left">
            <div className="img-container text-center">
              <a href={`tel:${info.formatted_phone_number}`}>
                <img src={phoneIcon} alt=""></img>
              </a>
            </div>
            <h6>{info.formatted_phone_number}</h6>
          </th>
          <th className="col table-bottom-right">
            <div className="button-container text-center ">
              <a href={info.url} target="_blank" rel="noreferrer">
                <Button variant="danger">Order Through Google</Button>
              </a>
            </div>
          </th>
        </tr>
      </Table>
      <h6>{info.description}</h6>
    </div>
  );
};

export default LocationInfoBox;
