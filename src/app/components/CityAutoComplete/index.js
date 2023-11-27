"use client";

import { useGetCity } from "@/app/hooks/useGetCity";
import { useState, useCallback, memo } from "react";
import { useDebounce } from "@/app/hooks/useDebounce";
import "./styles.scss";

const CityAutoComplete = ({ onChange }) => {
  const [city, setCity] = useState("");
  const debouncedValue = useDebounce(city, 500)
  const { data } = useGetCity(debouncedValue);

  const handleCityChange = useCallback((e) => {
    setCity(e.target.value);
  }, [setCity]);

  const handleSubmitCity = useCallback(() => {
    onChange(debouncedValue);
  }, [onChange, debouncedValue])

  return (
    <div className="city_container">
      <label htmlFor="city">Type city</label>
      <input
        list="places"
        type="text"
        id="city"
        name="city"
        onChange={handleCityChange}
        value={city}
        autoComplete="off"
      />
      <datalist id="places">
        {(data || []).map((feat, i) =>
          <option data-testid={feat?.properties?.city} key={i}>{feat?.properties?.city}</option>
        )}
      </datalist>
      <button onClick={handleSubmitCity} disabled={!city} >Show weather for city</button>
    </div>
  );
};

export default memo(CityAutoComplete);
