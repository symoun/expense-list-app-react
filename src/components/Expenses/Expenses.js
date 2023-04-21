import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
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
        {filteredItems.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
}
