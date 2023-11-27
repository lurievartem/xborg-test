"use client";

import { useGetWeather } from "@/app/hooks/useGetWeather";
import { useState, useCallback, memo } from "react";
import CityAutoComplete from '@/app/components/CityAutoComplete';
import Weather from "@/app/components/Weather";

const WeatherContainer = () => {
  const [city, setCity] = useState("");
  const { data, isError, isLoading } = useGetWeather(city);

  const handleCityChange = useCallback((name) => {
    setCity(name);
  }, [setCity]);

  return (
    <div>
      <p>Weather</p>
      <CityAutoComplete onChange={handleCityChange} />
      {isLoading && <p>Loading...</p>}
      {isError && <div>Cannot retrieve data, please check the city name</div>}
      {data && <Weather data={data} />}
    </div>
  );
};

export default memo(WeatherContainer);
