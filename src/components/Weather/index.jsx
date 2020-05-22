import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.scss';

const TheWeather = (props) => {
  const apiKey = process.env.REACT_APP_WEATHER_API;
  const weatherCall = `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&units=metric&lon=${props.long}&appid=${apiKey}`;

  //   const [weather, setWeather] = useState({});
  const [temperature, setTemperature] = useState();
  const [conditions, setConditions] = useState('');

  useEffect(() => {
    getWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWeather = async () => {
    await axios
      .get(weatherCall)

      .then((res) => {
        const weatherDetails = res.data;
        setTemperature(parseInt(weatherDetails.main.temp));
        setConditions(weatherDetails.weather[0].main);
      })

      .catch('Something went wrong');
  };

  return (
    <div className='weather-container'>
      {temperature && (
        <h2>
          <span>Weather: </span> {temperature}°C - {conditions}
        </h2>
      )}
      {!temperature && (
        <h2 id=''>
          <span className='no-weather'>
            No weather data available for that area
          </span>
        </h2>
      )}
    </div>
  );
};

export default TheWeather;
