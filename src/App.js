import React, { useState } from "react";
import WeatherConditions from "./components/weather-condition/weather-conditions.component.jsx";
import getCity from "./components/locations.js";
import getWeather from "./components/conditions";
import "./App.css";

const App = () => {
  const [location, setLocation] = useState("");
  const [locationData, setLocationData] = useState({});
  const [locationConditions, setLocationConditions] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    getCity(location)
      .then((data) => {
        setLocationData(data);
        getWeather(data.Key)
          .then((data) => setLocationConditions(data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  console.log("location data", locationData);
  console.log("location conditions", locationConditions);
  return (
    <div className="App">
      <div className="container mx-5 mx-auto">
        <h1 className="text-muted text-center my-4">Weather App</h1>
        <form
          className="change-location my-4 text-center text-muted"
          onSubmit={handleSubmit}
        >
          <label htmlFor="city">
            Enter a location for weather information:
          </label>
          <input
            required
            type="text"
            name="city"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-control p-4"
          />
        </form>
        {locationConditions.Temperature ? (
          <WeatherConditions
            locationConditions={locationConditions}
            locationData={locationData}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;
