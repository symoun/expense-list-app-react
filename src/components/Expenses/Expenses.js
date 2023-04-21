import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import "./Expenses.css";

export default function Expenses(props) {
  const [year, setYear] = useState(2020);

  const filteredItems = props.expenses.filter(
    (items) => items.date.getFullYear() === Number(year)
  );

  function onChangeYearHandler(year) {
    setYear(year);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeYear={onChangeYearHandler} value={year} />
        <ExpenseList list={filteredItems} />
      </Card>
    </div>
  );
}
