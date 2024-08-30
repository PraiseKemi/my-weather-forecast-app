import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDate from "./ForecastDate";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState([]);

    function handleResponse(response) {
      setForecast(response.data.daily);
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
  
  
  if (forecast.length > 0) {
     return (
      <div className="weatherForecast row">
        {forecast.map(function(dailyForecast, index) {
          let maxTemperature = Math.round(dailyForecast.temperature.maximum);
          let minTemperature = Math.round(dailyForecast.temperature.minimum);

          if (index < 5) {
            return (
              <div className="weatherForecastDay col" key={index}>
                <div className="weatherForecastWeekday">
                  <ForecastDate date={dailyForecast.time} />
                </div>

                <img
                  className="weatherForecastIcon"
                  src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${dailyForecast.condition.icon}.png`}
                  alt={dailyForecast.condition.icon}
                />
                <div className="weatherForecastTemperatures">
                  <span className="weatherForecastTemperatureMax">
                    <strong>{maxTemperature}°</strong>
                  </span>
                  <span className="weatherForecastTemperatureMin">
                    {" "}{minTemperature}°
                  </span>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}