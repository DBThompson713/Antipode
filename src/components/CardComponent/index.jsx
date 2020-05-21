import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import cardStyles from './Card.module.scss';

const Card = (props) => {
  const imageUrl = props.imageUrl;
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div
      className={cardStyles.card}
      style={{ gridArea: `card-${props.cardNumber}` }}
      onClick={() => set((state) => !state)}
    >
      <animated.div
        className={`${cardStyles.cardSide} ${cardStyles.cardSideBack}`}
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        <h1>Card {props.cardNumber}</h1>
      </animated.div>
      <animated.div
        className={`${cardStyles.cardSide} ${cardStyles.cardSideFront}`}
        style={{
          backgroundImage: `url( ${imageUrl} )`,
          opacity,
          transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
        }}
      />
    </div>
  );
};

export default Card;
