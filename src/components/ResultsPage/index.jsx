import React from 'react';
import CardComponent from './../CardComponent';
import './styles.scss';

const ResultsPage = (props) => {
  const data = props.data;

  function reset() {
    window.location.reload();
  }

  if (data.formatted) {
    const antiData = props.antipode;

    //   YOUR LOCATION
    const locationName = data.formatted;
    const latitude = props.data.geometry.lat;
    const longitude = props.data.geometry.lng;

    //   ANTIPODE
    const antipodeName = antiData.formatted;
    const oppLatitude = props.oppLat;
    const oppLongitude = props.oppLong;

    return (
      <div className='results-container'>
        {latitude && (
          <CardComponent
            latitude={latitude}
            longitude={longitude}
            locationName={locationName}
            oppLatitude={oppLatitude}
            oppLongitude={oppLongitude}
            antipodeName={antipodeName}
          />
        )}

        <p id='instructions'>- Tap the map to see the antipode -</p>
      </div>
    );
  } else {
    return (
      <h1 id='no-location' onClick={reset}>
        Sorry, I couldn't find that location
      </h1>
    );
  }
};

export default ResultsPage;
