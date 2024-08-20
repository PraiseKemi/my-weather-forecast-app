import React from "react";

import "./Form.css";

export default function Form() {
  return (
    <header>
      <form id="search-form">
        <input
          type="search"
          placeholder="Enter a city.."
          required
          className="searchInput"
          id="search-input"
        />
        <input type="submit" value="Search" className="searchButton" />
      </form>
    </header>
  );
}