import React from 'react'
import './ExpenseItem.css';

const ExpenseItem = ({title, price}) => {
  console.log(title);
  console.log(price);
  return (
    <div className='expense-item'>
      <div>2023년 10월 30일</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{price}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;