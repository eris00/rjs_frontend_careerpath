import './Expenses.css';
import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((el) => {
    return el.date.getFullYear().toString() === filteredYear;
  });


  return (
    <Card className='expenses'>

      <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler} 
      />
        <ExpensesChart expenses = {filteredExpenses} />
        <ExpensesList items={filteredExpenses} />

    </Card>
  )
}

export default Expenses