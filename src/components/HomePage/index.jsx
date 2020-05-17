import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, isLogged } from './actions';

import { useHistory } from 'react-router-dom';
import SearchForm from './../SearchForm';
import './styles.scss';

const Homepage = () => {
  const [location, setLocation] = useState('');
  const [antipodeData, setAntipodeData] = useState({
    location: '',
    antipodeLocation: '',
    fullName: '',
    lat: '',
    long: '',
    oppLat: '',
  });
  const [antipodeLocation, setAntipodeLocation] = useState('');
  const [fullName, setFullName] = useState('');
  const [geoLat, setGeoLat] = useState();
  const [oppLong, setOppLong] = useState({});
  const [oppLat, setOppLat] = useState({});
  const [geoLong, setGeoLong] = useState({});
  const inputElement = React.createRef();
  const apiKey = process.env.REACT_APP_COORDS_API;
  const coordsCall = `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${apiKey}`;
  const antipodeCall = `https://api.opencagedata.com/geocode/v1/json?q=${oppLat}+${oppLong}&key=${apiKey}`;
  //

  //
  const handleInput = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation);
  };

  const getAntipode = async () => {
    if (location !== '') {
      GetCoords(location);
    } else {
      alert('Please enter a location');
    }
    return;
  };

  const GetCoords = async (location) => {
    await axios
      .get(coordsCall)
      .then((results) => {
        // console.log(results);

        const geo = results.data.results[0].geometry;

        setGeoLat(geo.lat);
        setFullName(results.data.results[0].formatted);
        setGeoLong(geo.lng);
        setOppLat(geo.lat * -1);
        setOppLong(geo.lng * -1);

        console.log(antipodeCall);
        axios.get(antipodeCall).then(
          console.log(results)
          // setAntipodeLocation()
        );

        console.log(
          `${fullName}:LAT:${geoLat}:LONG${geoLong}::::::::${antipodeLocation}LAT:${oppLat}:LONG:${oppLong}`
        );

        setAntipodeData({
          location: { location },
          antipodeLocation: { antipodeLocation },
          fullName: { fullName },
          lat: { geoLat },
          long: { geoLong },
          oppLat: { oppLat },
        });
        console.log(antipodeData);
      })
      .catch(console.log(''));
  };

  return (
    <div className='home-container'>
      <div className='search'>
        <SearchForm
          handleInput={handleInput}
          location={location}
          inputElement={inputElement}
          getAntipode={getAntipode}
        />
        <Link to='/ResultsPage' data={antipodeData}>
          <div
            role='button'
            className='search-button'
            type='submit'
            onClick={getAntipode}
          >
            Search
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
