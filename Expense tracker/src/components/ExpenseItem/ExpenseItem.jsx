import styles from './ExpenseItem.module.css';

const ExpenseItem = ({ title, amount, date }) => {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className={styles['expense-item']}>
      <div>
        <div>{month}</div>
        <div>{year} </div>
        <div>{day} </div>
      </div>
      <div className={styles['expense-item__description']}>
        <h2>{title}</h2>
        <div className={styles['expense-item__price']}>${amount}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;