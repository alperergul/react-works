import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterExpenses = (filterYear) => {
    setFilteredYear(filterYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  /* ****************************************************** */
  /* 3. SOLUTION */

  /* ****************************************************** */

  return (
    <div className="expenses">
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilter={filterExpenses} />
        <ExpensesChart expenses={filteredExpenses} />
        {/* ****************************************************** */}
        {/* 3. SOLUTION */}
        <ExpensesList items={filteredExpenses} />
        {/* ****************************************************** */}
        {/* 2. SOLUTION */}
        {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
        {filterExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* ****************************************************** */}
        {/* 1. SOLUTION ****/}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
      </Card>
    </div>
  );
};

export default Expenses;
