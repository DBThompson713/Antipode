import React from 'react';
import Homepage from './components/HomePage';
import AppContainer from './components/AppContainer';
import ResultsPage from './components/ResultsPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <p className='title'>antipode</p>
      <Router>
        {/* <Homepage /> */}
        {/* <ResultsPage /> */}
        <Route exact path='/' component={Homepage} />
        <Route path='/resultspage' component={ResultsPage} />
      </Router>
    </div>
  );
}

export default App;
