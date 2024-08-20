import React from "react";
import Form from "./Form";
import Humidity from "./Humidity";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Form />
      <main>
        <div className="currentWeather">
          <div>
            <h1 className="currentCity" id="current-city">
              Paris
            </h1>
            <div className="currentDetails">
              <span id="current-date"></span>,
              <span id="current-condition">moderate rain</span>
              <Humidity value={87} />
            </div>
          </div>
          <div className="currentTemperature">
            <span id="icon">☀️</span>
            <span className="currentTemperatureValue" id="current-temperature">
              24
            </span>
            <span className="currentTemperatureUnit">°C</span>
          </div>
        </div>
        <div className="weatherForecast" id="forecast"></div>
      </main>
      <Footer />
    </div>
  );
}
