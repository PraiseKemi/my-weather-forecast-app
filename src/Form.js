import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

import "./Form.css";

export default function Form() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
      coordinates: response.data.coordinates
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "44a34b249b930f2abo9988f7a607t982";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

    useEffect(() => {
    let apiKey = "44a34b249b930f2abo9988f7a607t982";
    let defaultCity = "Paris";
    let url = `https://api.shecodes.io/weather/v1/current?query=${defaultCity}&key=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }, []);

  return (
    <div>
    <header>
      <form id="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city.."
          required
          className="searchInput"
          autoFocus
          onChange={updateCity}
        />
        <input type="submit" value="Search" className="searchButton" />
      </form>
      </header>
      <div>
        <Weather display={weather} />
        <main>
          <WeatherForecast coordinates={weather.coordinates} />
        </main>
        
      </div>
      </div>
  );
}