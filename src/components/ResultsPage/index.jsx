import React from 'react';
import MapComponent from '../MapComponent';
import './styles.scss';

const ResultsPage = (props, antipode) => {
  const data = props.data;
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
      <section className='results your-location '>
        <h1>{locationName}</h1>
        <div className='map-container'>
          <MapComponent lat={latitude} long={longitude} className='the-map' />
        </div>
        {/* <h2>Lat:{latitude}</h2>
        <h2>Long: {longitude}</h2> */}
      </section>
      <section className='results antipode-location'>
        {/* <h1>{antipodeName}</h1> */}
        <h1>Antipode</h1>
        <div className='map-container'>
          <MapComponent
            lat={oppLatitude}
            long={oppLongitude}
            className='the-map'
          />
        </div>
        {/* <h2>Lat:{oppLatitude}</h2>
        <h2>Long: {oppLongitude}</h2> */}
      </section>
    </div>
  );
};

export default ResultsPage;
