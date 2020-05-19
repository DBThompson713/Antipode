import React from 'react';
import MapComponent from '../MapComponent';
import './styles.scss';

const ResultsPage = (props) => {
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
        <h1>
          <span>{locationName}</span>{' '}
          <span>
            {' '}
            LAT: {parseInt(latitude)} :: LONG:{parseInt(longitude)}
          </span>
        </h1>
        <div className='map-container'>
          <MapComponent lat={latitude} long={longitude} className='the-map' />
        </div>
      </section>
      <section className='results antipode-location'>
        {antipodeName !== 'Undefined Graffiti, Sannat, Gozo Region, Malta' && (
          <h1>
            {antipodeName} LAT: {parseInt(oppLatitude)} :: LONG:
            {parseInt(oppLongitude)}
          </h1>
        )}
        {antipodeName === 'Undefined Graffiti, Sannat, Gozo Region, Malta' && (
          <h1>
            Antipode LAT: {parseInt(oppLatitude)} :: LONG:
            {parseInt(oppLongitude)}
          </h1>
        )}

        {/* <h1>Antipode</h1> */}
        <div className='map-container'>
          <MapComponent
            lat={oppLatitude}
            long={oppLongitude}
            className='the-map'
          />
        </div>
      </section>
    </div>
  );
};

export default ResultsPage;
