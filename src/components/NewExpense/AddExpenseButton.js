export default function AddExpenseButton(props) {
  function addFormHandler() {
    props.onClick();
  }
  return <button onClick={addFormHandler}>Add expenses</button>;
}
