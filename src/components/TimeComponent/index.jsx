import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.scss';

const TimeComponent = (props) => {
  const apiKey = process.env.REACT_APP_TIMEZONE_API;
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const timeCall = `https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&lat=${props.lat}&long=${props.long}`;

  useEffect(() => {
    GetTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function truncate(str, no_words) {
    return str.split(' ').splice(0, no_words).join(' ');
  }

  const GetTime = async () => {
    await axios
      .get(timeCall)

      .then((res) => {
        const theTime = res.data.time_12;
        console.log(theTime);
        setTime(theTime);
        setDate(res.data.date_time_txt);
        console.log(Date);
      })
      .catch('Something went wrong');
  };
  return (
    <div className='time-container'>
      <h2>
        <span>date:</span>
        {!date && 'sorry, not available'}
        {/* {date} */}
        {truncate(date, 4)}
      </h2>
      <h2>
        <span>time:</span>
        {!time && 'sorry, not available'}
        {time.slice(0, 5) + ' ' + time.slice(9, 11)}
      </h2>
    </div>
  );
};

export default TimeComponent;
