import React from 'react';
import './card.css';

const Card = ({ children, className }) => {
  const madeClass = 'card' + className;
  return <div className={madeClass}>{children}</div>;
};

export default Card;
