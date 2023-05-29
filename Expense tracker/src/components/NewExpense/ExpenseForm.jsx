import { useState } from 'react';
import styles from './ExpenseForm.module.css';

const ExpenseForm = () => {
  const [expenseData, setExpenseData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setExpenseData({
      title: e.target.titleInput.value,
      amount: e.target.amountInput.value,
      date: new Date(e.target.dateInput.value),
    });
  };
  console.log(expenseData);

  return (
    <form onSubmit={submitHandler}>
      <div className={styles['new-expense__controls']}>
        <div className={styles['new-expense__control']}>
          <label>Title</label>
          <input type="text" name="titleInput" />
        </div>
        <div className={styles['new-expense__control']}>
          <label>Amount</label>
          <input name="amountInput" type="number" min="0.01" step="0.01" />
        </div>
        <div className={styles['new-expense__control']}>
          <label>Date</label>
          <input
            name="dateInput"
            type="date"
            min="2019-01-01"
            max="2023-12-21"
          />
        </div>
        <div className={styles['new-expense__actions']}>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
