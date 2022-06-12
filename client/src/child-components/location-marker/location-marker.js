import { useState, useRef, useEffect } from "react";
import { Icon, InlineIcon } from "@iconify/react";
import postalCodePrefix from "@iconify-icons/map/postal-code-prefix";
import { Overlay, Tooltip } from "react-bootstrap";
import _ from "lodash";
import { useSelector } from "react-redux";

import "./location-marker.css";

const LocationMarker = ({ info, onClick, markerClassName }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  const [hasFocus, setFocus] = useState(false);
  const [clickedClass, setClickedClass] = useState("");
  const restaurantInfo = useSelector((state) => state.restaurant);

  const handleMarkerClick = (target) => {};
  return (
    <div
      className="location-marker"
      onClick={() => {
        setShow(!show);
      }}
    >
      <Icon
        onClick={() => {
          onClick(info);
        }}
        icon={
          markerClassName === "location-icon-clicked"
            ? "clarity:map-marker-solid-badged"
            : postalCodePrefix
        }
        className={markerClassName}
      ></Icon>
    </div>
  );
};

export default LocationMarker;
