import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import MapComponent from './../MapComponent';
import TimeComponent from './../TimeComponent';
import './styles.scss';

const Card = (props) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div className='card' onClick={() => set((state) => !state)}>
      <animated.div
        className='cardSide cardSideBack'
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        <div>
          <h1 className='title-coords'>{props.locationName} </h1>
          <p>
            <span className='coords'>
              LAT: {parseInt(props.latitude)} :: LNG:{parseInt(props.longitude)}
            </span>
          </p>
        </div>

        <div className='map-container'>
          <MapComponent
            lat={props.latitude}
            long={props.longitude}
            className='the-map'
          />
        </div>
      </animated.div>
      <animated.div
        className='cardSide cardSideFront'
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
        }}
      >
        {props.antipodeName !==
          'Undefined Graffiti, Sannat, Gozo Region, Malta' && (
          <h1 className='title-coords'>{props.antipodeName}</h1>
        )}
        {props.antipodeName ===
          'Undefined Graffiti, Sannat, Gozo Region, Malta' && (
          <div>
            <h1 className='title-coords'>Antipode</h1>
            <p>
              <span className='coords'>
                LAT: {parseInt(props.oppLatitude)} :: LNG:
                {parseInt(props.oppLongitude)}
              </span>
            </p>
          </div>
        )}

        <div className='map-container'>
          <MapComponent
            lat={props.oppLatitude}
            long={props.oppLongitude}
            className='the-map'
          />
        </div>
      </animated.div>
    </div>
  );
};

export default Card;
