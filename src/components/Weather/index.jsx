import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResultsPage from './../ResultsPage';
import SearchForm from './../SearchForm';
import './styles.scss';

const TheWeather = (props) => {
  const apiKey = process.env.REACT_APP_WEATHER_API;
  const weatherCall = `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&units=metric&lon=${props.long}&appid=${apiKey}`;

  const [weather, setWeather] = useState({});
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
      })

      .catch('Something went wrong');
  };

  return (
    <div>
      <h2>Weather</h2>
      {/* {console.log(weather.main)} */}
      <p>{temperature}°C</p>
      <p>{conditions}</p>
    </div>
  );
};

export default TheWeather;
