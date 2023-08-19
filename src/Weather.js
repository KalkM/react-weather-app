import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>City</h1>
      <ul>
        <li>Date</li>
        <li>Description</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <p>Icon</p>
          <span className="temperature">Temp</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation</li>
            <li>Humidity</li>
            <li>Wind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
