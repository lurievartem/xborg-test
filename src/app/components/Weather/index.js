"use client";

import { useMemo } from 'react';
import "./styles.scss";

const Weather = ({ data }) => {
  return (
    <div className="weather_container">
      {Object.keys(data).map((key)=> (
        <div key={key} className="weather_item">
          <h6>{key}:</h6>
          {data[key]}
        </div>
      ))}
    </div>
  );
};

export default Weather;
