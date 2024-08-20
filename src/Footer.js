import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This project was coded by{" "}
        <a href="https://github.com/PraiseKemi" target="_blank" rel="noreferrer">
          Praise Obafemi
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/PraiseKemi/praise-weather-app"
          target="_blank" rel="noreferrer"
        >
          on GitHub
        </a>{" "}
        and{" "}
        <a href="https://my-special-weather-app.netlify.app/" target="_blank" rel="noreferrer">
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}