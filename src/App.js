import React from "react";
import Form from "./Form";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.css';

import "./App.css";

export default function App() {
  return (
    <div className="App">
     <div className="container">
      <Form />
      <main>
        <div className="weatherForecast" id="forecast"></div>
      </main>
        <Footer />
      </div>
    </div>
  );
}
