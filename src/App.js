import React from 'react';
import Homepage from './components/HomePage';
import About from './components/About';
import ResultsPage from './components/ResultsPage';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import './App.scss';

function App() {
  function reset() {
    window.location.reload();
  }

  return (
    <div className='App'>
      <p id='copyright'>©2020 Dale Thompson</p>

      <p className='title' onClick={reset}>
        antipode
      </p>
      <Router>
        {/* <NavLink to='/About' class>about</NavLink> */}
        <Route exact path='/' component={Homepage} />
      </Router>
    </div>
  );
}

export default App;
