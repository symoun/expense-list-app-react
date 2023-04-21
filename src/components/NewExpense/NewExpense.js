import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddExpenseButton from "./AddExpenseButton";

export default function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  function showFormHandler() {
    setShowForm(true);
  }
  function closeFormHandler() {
    setShowForm(false);
  }

  function onSaveExpenseDataHandler(data) {
    const expenseData = { ...data, id: Math.random().toString() };
    props.newExpense(expenseData);
  }
  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          cancelButton={closeFormHandler}
        />
      ) : (
        <AddExpenseButton onClick={showFormHandler} />
      )}
    </div>
  );
}
