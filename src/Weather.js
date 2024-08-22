import React from "react";

import "./Weather.css";

export default function Weather(props) {
        if (!props.display || !props.display.city) {
            return <div>Loading...</div>;
        } else {
            return (
                <main>
                    <div className="currentWeather row">
                        <div className="col-7">
                            <h1 className="currentCity" id="current-city">
                                {props.display.city}
                            </h1>
                            <div className="currentDetails">
                                <span id="current-date"></span>,
                                <span id="current-condition">{props.display.description}</span>
                                <p>
                                    Humidity: <span className="valueStyle">{props.display.humidity}%</span>,
                                    Wind: <span className="valueStyle">{props.display.wind}m/s</span>
                            
                                </p>
                            </div>
                        </div>
                        <div className="currentTemperature col-5">
                            <span id="icon">☀️</span>
                            <span className="currentTemperatureValue" id="current-temperature">
                                {props.display.temperature}
                            </span>
                            <span className="currentTemperatureUnit">°C</span>
                        </div>
                    </div>
                </main>
            )
        }
}