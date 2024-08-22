import React from "react";
import Form from "./Form";
import Humidity from "./Humidity";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.css';

import "./App.css";

export default function App() {
  return (
    <div className="App">
     <div className="container">
      <Form />
      <main>
        <div className="currentWeather row">
          <div className="col-7">
            <h1 className="currentCity" id="current-city">
              Paris
            </h1>
            <div className="currentDetails">
              <span id="current-date"></span>,
              <span id="current-condition">moderate rain</span>
              <Humidity value={87} />
            </div>
          </div>
          <div className="currentTemperature col-5">
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
    </div>
  );
}
