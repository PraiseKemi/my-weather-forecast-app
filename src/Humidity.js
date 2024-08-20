import React from "react";
import Wind from "./Wind";

import "./Humwind.css";

export default function Humidity(props) {
  return (
    <div className="Humidity">
      <p>
        Humidity: <span className="valueStyle">{props.value}%</span>,
        <Wind value={7.2} />
      </p>
    </div>
  );
}