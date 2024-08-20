import React from "react";

import "./Humwind.css";

export default function Wind(props) {
  return (
    <span>
      {" "}
      Wind: <span className="valueStyle">{props.value}km/h</span>
    </span>
  );
}