import React from "react";

const WeatherConditions = ({ locationConditions, locationData }) => {
  return (
    <div className="card shadow-lg rounded">
      {locationConditions.IsDayTime ? (
        <img
          src={process.env.PUBLIC_URL + `/images/day.svg`}
          alt="is day time"
          className="time card-img-top"
        />
      ) : (
        <img
          src={process.env.PUBLIC_URL + `/images/night.svg`}
          alt="is night time"
          className="time card-img-top"
        />
      )}
      <div className="icon bg-light mx-auto text-center">
        <img
          src={
            process.env.PUBLIC_URL +
            `/images/icons/${locationConditions.WeatherIcon}.svg`
          }
          alt="weather icon"
        />
      </div>
      <div className="text-muted text-uppercase text-center details">
        <h5 className="my-3">{locationData.LocalizedName}</h5>
        <h7 className="my-3">{locationData.Country.LocalizedName}</h7>
        <div className="my-3">{locationConditions.WeatherText}</div>
        <div className="display-4 my-4">
          <span>{locationConditions.Temperature.Metric.Value}</span>
          <span>&deg;C</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherConditions;
