// import logo from './logo.svg';
// import NoName from './NoName';
import React from 'react';
import ExpenseItem from './components/ExpenseItem';
import './App.css';


function App() {

  return (
    <>
      <ExpenseItem title='피자헛' price='2000'/>
      <ExpenseItem title='도미노' price='4000'/>
      <ExpenseItem title='파파존스' price='5000'/>
    </>
  );
}

export default App;
