import React from 'react'
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {

    let expensesContent = <p>No expenses found</p>;

    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

  return (
    <ul className='expenses-list'> 
        {props.items.map((el) => (
          <ExpenseItem 
            key = {el.id}
            id = {el.id}
            title = {el.title}
            amount = {el.amount}
            date = {el.date}
          />
        ))}
    </ul>
  ) 
      
}

export default ExpensesList