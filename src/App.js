import React from 'react';
import Homepage from './components/HomePage';
import ResultsPage from './components/ResultsPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
        <Route exact path='/' component={Homepage} />
        <Route path='/resultspage' component={ResultsPage} />
      </Router>
    </div>
  );
}

export default App;
