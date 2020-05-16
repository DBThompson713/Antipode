import React, { useState } from 'react';
import axios from 'axios';
import './styles.scss';
import SearchForm from './../SearchForm';

const Homepage = () => {
  const [location, setLocation] = useState('');
  const [geoLat, setGeoLat] = useState();
  const [oppLong, setOppLong] = useState({});
  const [oppLat, setOppLat] = useState({});
  const [geoLong, setGeoLong] = useState({});

  const inputElement = React.createRef();
  const apiKey = process.env.REACT_APP_COORDS_API;

  const handleInput = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation);
  };

  const getAntipode = async () => {
    if (location !== '') {
      GetCoords(location);
      console.log();
      //
    } else {
      alert('Please enter a location');
    }

    return;
  };

  const GetCoords = async (location) => {
    await axios
      .get(
        `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${apiKey}`
      )
      .then((results) => {
        console.log(results);

        setGeoLat(results.data.results[0].geometry.lat);
        setGeoLong(results.data.results[0].geometry.lng);
        setOppLat(results.data.results[0].geometry.lat * -1);
        setOppLong(results.data.results[0].geometry.lng * -1);
      })
      .catch(console.log(''));
  };
  return (
    <div className='home-container'>
      <p className='title'>Antipode Weather</p>
      <SearchForm
        handleInput={handleInput}
        location={location}
        inputElement={inputElement}
        getAntipode={getAntipode}
      />
    </div>
  );
};

export default Homepage;
