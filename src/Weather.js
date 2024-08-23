import React from "react";
import FormattedDate from "./FormattedDate";


import "./Weather.css";

export default function Weather(props) {
        if (!props.display || !props.display.city) {
            return <div>Loading...</div>;
        } else {
            return (
                <main>
                    <div className="CurrentWeather row">
                        <div className="col-6">
                            <h1 className="CurrentCity mb-4">
                                {props.display.city}
                            </h1>
                            <div className="CurrentDetails">
                                <span><FormattedDate date={props.display.date} /></span>,
                                <span> {props.display.description}</span>
                                <p>
                                    Humidity: <span className="ValueStyle">{props.display.humidity}%</span>,
                                    Wind: <span className="ValueStyle">{props.display.wind}m/s</span>
                            
                                </p>
                            </div>
                        </div>
                        <div className="CurrentTemperature col-6">
                            <span id="icon"><img className="CurrentTemperatureIcon" src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.display.icon}.png`} alt={`${props.display.icon}`} />
                            </span>
                            <span className="CurrentTemperatureValue">
                                {props.display.temperature}
                            </span>
                            <span className="CurrentTemperatureUnit">°C</span>
                        </div>
                    </div>
                </main>
            )
        }
}