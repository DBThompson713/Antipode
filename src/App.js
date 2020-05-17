import React from 'react';
import Homepage from './components/HomePage';
import ResultsPage from './components/ResultsPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <p className='title'>antipode</p>
      <Router>
        <Homepage />
        <ResultsPage />
        <Route exact path='/' component={Homepage} />
        <Route path='/ResultsPage' component={ResultsPage} />
      </Router>
    </div>
  );
}

export default App;
