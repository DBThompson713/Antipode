import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import TheWeather from './../Weather';

const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),

  withScriptjs,
  withGoogleMap
)((props) => (
  <div>
    <div>
      <TheWeather lat={props.lat} long={props.long} />
    </div>
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{ lat: props.lat, lng: props.long }}
    >
      <Marker position={{ lat: props.lat, lng: props.long }} />
    </GoogleMap>
  </div>
));

export default MapComponent;
