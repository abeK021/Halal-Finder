import { useState } from "react";
import { Icon } from "@iconify/react";
import postalCodePrefix from "@iconify-icons/map/postal-code-prefix";

import "./location-marker.css";

const LocationMarker = ({ info, onClick, markerClassName }) => {
  const [show, setShow] = useState(false);

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
