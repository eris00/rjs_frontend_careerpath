import React from 'react'
import Chart from '../Chart/Chart';

function ExpensesChart(props) {

    const chartDataPoints = [
        { label: 'Jan', value:0 },
        { label: 'Feb', value:1 },
        { label: 'Mart', value:2 },
        { label: 'Arpil', value:3 },
        { label: 'May', value:4 },
        { label: 'Jun', value:5 },
        { label: 'Jul', value:6 },
        { label: 'Aug', value:7 },
        { label: 'Sept', value:8 },
        { label: 'Okt', value:9 },
        { label: 'Nov', value:10 },
        { label: 'Dec', value:11 },
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }

  return (

    <Chart
        dataPoints = {chartDataPoints}

    />
  )
}

export default ExpensesChart