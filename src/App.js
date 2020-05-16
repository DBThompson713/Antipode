import React from 'react';
import Homepage from './components/HomePage';
import ResultsPage from './components/ResultsPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
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
