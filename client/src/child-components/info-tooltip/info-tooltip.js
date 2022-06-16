import React from "react";

import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Icon } from "@iconify/react";
import "./info-tooltip.css";

const popover = (
  <Tooltip id="popover-basic" style={{ fontSize: ".85rem", lineHeight: "1.5" }}>
    Results might not be 100% accurate especially for smaller cities.
    <hr />
    You should still verify with the restaurant
  </Tooltip>
);

const InfoTooltip = () => {
  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <div>
        <Icon
          style={{ margin: "5px" }}
          icon="akar-icons:info-fill"
          color="#356e5b"
          width="25px"
        />
      </div>
    </OverlayTrigger>
  );
};

export default InfoTooltip;
