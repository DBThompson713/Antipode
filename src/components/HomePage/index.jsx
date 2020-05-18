import React, { useState } from 'react';
import axios from 'axios';
import ResultsPage from './../ResultsPage';
import SearchForm from './../SearchForm';
import './styles.scss';

const Homepage = () => {
  const [location, setLocation] = useState('');
  const [oppLong, setOppLong] = useState();
  const [oppLat, setOppLat] = useState();
  const [resultsData, setResultsData] = useState({});
  const [antipodeData, setAntipodeData] = useState({});
  const [hideResults, setHideResults] = useState(false);

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
    } else {
      alert('Please enter a location');
    }
    return;
  };

  const GetCoords = async (location) => {
    await axios
      .get(coordsCall)
      .then((res) => {
        setOppLong(res.data.results[0].geometry.lng * -1);
        setOppLat(res.data.results[0].geometry.lat * -1);
        setResultsData(res.data.results[0]);
      })
      .then(
        await axios.get(antipodeCall).then((results) => {
          setAntipodeData(results.data.results[0]);
        })
      )
      .catch('Something went wrong');
    setHideResults(!hideResults);
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
          />

          <div
            role='button'
            className='search-button'
            type='submit'
            onClick={getAntipode}
          >
            Search
          </div>
        </div>
      )}

      {hideResults && (
        <ResultsPage
          data={resultsData}
          antipode={antipodeData}
          oppLat={oppLat}
          oppLong={oppLong}
        />
      )}
    </div>
  );
};

export default Homepage;
