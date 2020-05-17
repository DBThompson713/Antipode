// import React, { useState } from 'react';
// import Homepage from './../HomePage';
// import ResultsPage from './../ResultsPage';
// import axios from 'axios';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import './styles.scss';

// function AppContainer() {
//   const [antipodeLocation, setAntipodeLocation] = useState('');
//   const [fullName, setFullName] = useState('');
//   const [geoLat, setGeoLat] = useState();
//   const [oppLong, setOppLong] = useState({});
//   const [oppLat, setOppLat] = useState({});
//   const [geoLong, setGeoLong] = useState({});
//   const apiKey = process.env.REACT_APP_COORDS_API;
//   const coordsCall = `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${apiKey}`;
//   const antipodeCall = `https://api.opencagedata.com/geocode/v1/json?q=${oppLat}+${oppLong}&key=${apiKey}`;

//   return (
//     <div className='App'>
//       <p className='title'>antipode</p>
//       <Router>
//         {/* <Homepage /> */}
//         {/* <ResultsPage /> */}
//         <Route
//           exact
//           path='/'
//           component={Homepage}
//           getCoords={GetCoords}
//           handleInput={handleInput}
//         />
//         <Route path='/resultspage' component={ResultsPage} />
//       </Router>
//     </div>
//   );
// }

// export default AppContainer;
