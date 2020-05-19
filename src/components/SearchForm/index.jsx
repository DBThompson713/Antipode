import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './styles.scss';

const SearchForm = (props) => {
  return (
    <div>
      <form className='search-form'>
        <input
          type='text'
          placeholder='Add a location'
          ref={props.inputElement}
          value={props.location}
          onChange={props.handleInput}
          onKeyDown={props.handleKeyDown}
        />
      </form>
    </div>
  );
};

export default SearchForm;
