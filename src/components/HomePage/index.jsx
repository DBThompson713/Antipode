import React, { useState } from 'react';
import axios from 'axios';
import './styles.scss';
import SearchForm from './../SearchForm';

const Homepage = () => {
  const [location, setLocation] = useState('');
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

  const handleInput = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation);
  };

  const getAntipode = async () => {
    if (location !== '') {
      GetCoords(location);
      //   console.log();
      //
    } else {
      //   alert('Please enter a location');
      console.log('');
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

        // console.log(results.data.results[0]);
        //
        //
        //
        console.log(antipodeCall);
        axios.get(antipodeCall).then(
          console.log(results)
          // setAntipodeLocation()
        );

        //
        // /
        //
        // alert(
        //   `${results.data.results[0].formatted}:${geoLat}Lat -${geoLong}Long ::::::: Antipode:${oppLat}Lat-${oppLong} `
        // );
        console.log(
          `${fullName}:LAT:${geoLat}:LONG${geoLong}::::::::${antipodeLocation}LAT:${oppLat}:LONG:${oppLong}`
        );
        console.log('');
      })
      .catch(console.log(''));
  };

  return (
    <div className='home-container'>
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
