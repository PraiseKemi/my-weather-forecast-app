import React, { useState } from "react";

import "./Weather.css";

export default function WeatherConvert(props) {
    const [unit, setUnit] = useState("celsius");

    function changeToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function changeToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
    return (
        <span>
            <span className="CurrentTemperatureValue">
                {props.temperature}
            </span>
            <span className="CurrentTemperatureUnit ms-2">°C | <a href="/" onClick={changeToFahrenheit}>°F</a></span>
        </span>
    )
    } else {
      let fahrenheit = (props.temperature * 9 / 5) + 32;
      return (
        <span>
            <span className="CurrentTemperatureValue">
                {Math.round(fahrenheit)}
            </span>
            <span className="CurrentTemperatureUnit ms-2"><a href="/" onClick={changeToCelsius}>°C</a> | °F</span>
        </span>
    )  
    }
}