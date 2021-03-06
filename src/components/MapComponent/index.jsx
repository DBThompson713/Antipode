import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import TheWeather from './../Weather';
import TimeZoneComponent from './../TimeComponent';

var mapOptions = {
  disableDefaultUI: true,
  mapTypeControl: false,
  scaleControl: true,
  zoomControl: true,
};

const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div className='actual-map' style={{ minHeight: `25vh` }} />
    ),
    disableDefaultUI: true,
    mapElement: <div style={{ height: `100%` }} />,
  }),

  withScriptjs,
  withGoogleMap
)((props) => (
  <div>
    <div>
      <TimeZoneComponent lat={props.lat} long={props.long} />
      <TheWeather lat={props.lat} long={props.long} />
    </div>
    <GoogleMap
      defaultZoom={2}
      defaultOptions={mapOptions}
      defaultCenter={{ lat: props.lat, lng: props.long }}
    >
      <Marker position={{ lat: props.lat, lng: props.long }} />
    </GoogleMap>{' '}
  </div>
));

export default MapComponent;
