import React from 'react';
import './CourseItem.css';

const CourseItem = ({ item }) => {
  console.log(item);

  return <li className="goal-item">{item.text}</li>;
};

export default CourseItem;
