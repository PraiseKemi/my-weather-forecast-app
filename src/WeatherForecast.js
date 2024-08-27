import React, { useEffect } from "react";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
}

    useEffect(() => {
    if (props.coordinates) {
      let apiKey = "44a34b249b930f2abo9988f7a607t982";
      let longitude = props.coordinates.longitude;
      let latitude = props.coordinates.latitude;
      let url = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

      axios.get(url).then(handleResponse);
    }
  }, [props.coordinates]);

    return (
     <div className="weatherForecast row">
        <div className="weatherForecastDay col">
            <div className="weatherForecastWeekday">Thur</div>
            
            <div className="weatherForecastIcon">🌤️</div>
            <div className="weatherForecastTemperatures">
              <span className="weatherForecastTemperatureMax"><strong>19°</strong></span>
              <span className="weatherForecastTemperatureMin"> 10°</span>
            </div>
            </div>
     </div>
    )
}