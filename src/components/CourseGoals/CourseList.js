import React from 'react';
import './CourseList.css';
import CourseItem from './CourseItem';
import styled from 'styled-components';

const CourseUI = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const CourseList = ({ items }) => {
  return (
    <ul className="goal-list">
      {items.map((item) => {
        return <CourseItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default CourseList;
