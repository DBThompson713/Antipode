import React, { useState } from 'react';
import axios from 'axios';
import ResultsPage from './../ResultsPage';
import SearchForm from './../SearchForm';
import './styles.scss';

const Homepage = () => {
  const apiKey = process.env.REACT_APP_COORDS_API;
  const inputElement = React.createRef();
  const [location, setLocation] = useState('');
  const [oppLong, setOppLong] = useState();
  const [oppLat, setOppLat] = useState();
  const [resultsData, setResultsData] = useState({});
  const [antipodeData, setAntipodeData] = useState({});
  const [hideResults, setHideResults] = useState(false);
  const coordsCall = `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${apiKey}`;
  const antipodeCall = `https://api.opencagedata.com/geocode/v1/json?q=${oppLat}+${oppLong}&key=${apiKey}`;

  const handleInput = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 || event.target.key === 'Enter') {
      event.preventDefault();
      GetCoords(location);
    }
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
      .then((res) => {
        if (res.data.results[0]) {
          if (res.data.results[0].geometry.lng <= 0) {
            setOppLong(180 + res.data.results[0].geometry.lng);
          } else {
            setOppLong(res.data.results[0].geometry.lng - 180);
          }
          setOppLat(res.data.results[0].geometry.lat * -1);
          setResultsData(res.data.results[0]);
        }
      })
      .then(
        await axios.get(antipodeCall).then((results) => {
          setAntipodeData(results.data.results[0]);
        })
      )
      .catch('Something went wrong');
    setHideResults(true);
  };
  return (
    <div className='home-container'>
      {!hideResults && (
        <div className='search'>
          <SearchForm
            handleInput={handleInput}
            location={location}
            inputElement={inputElement}
            getAntipode={getAntipode}
            handleKeyDown={handleKeyDown}
          />

          <div
            role='button'
            className='search-button'
            type='submit'
            onClick={getAntipode}
          >
            Find antipode
          </div>
          <p id='define'>
            antipode: <span>The diametrically opposite spot on Earth</span>
          </p>
        </div>
      )}

      {hideResults && (
        <ResultsPage
          data={resultsData}
          antipode={antipodeData}
          oppLat={oppLat}
          oppLong={oppLong}
          handleInput={handleInput}
          location={location}
          inputElement={inputElement}
          getAntipode={getAntipode}
          handleKeyDown={handleKeyDown}
        />
      )}
    </div>
  );
};

export default Homepage;
