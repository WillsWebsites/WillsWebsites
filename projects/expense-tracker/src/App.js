import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 499.49, date: new Date(2021, 3, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
  { id: "e5", title: "Flight", amount: 799.49, date: new Date(2021, 6, 12) },
  {
    id: "e6",
    title: "Home Painting Project",
    amount: 294.67,
    date: new Date(2022, 3, 28),
  },
  {
    id: "e7",
    title: "Office Furniture",
    amount: 650,
    date: new Date(2022, 7, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <Expenses items={expenses} />
      <NewExpense onAddExpense={addExpenseHandler} />
    </div>
  );
};

export default App;
