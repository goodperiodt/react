import React from 'react';

const Hello = (props) => {
  console.log('Hello Component!');
  console.log('props: ', props);
  return (
    <div>
      {props.children}
      Hello React!
    </div>
  );
};

export default Hello;
