import './style/Expenses.css';
import React from 'react'
import ExpenseItem from './ExpenseItem';
import Card from './UI/Card';

function Expenses(props) {
  return (
    <Card className='expenses'>
        {
            props.expenses.map((el) => (
            <ExpenseItem 
                id = {el.id}
                title = {el.title}
                amount = {el.amount}
                date = {el.date} 
            />
            ))
        }
    </Card>
  )
}

export default Expenses