import styles from './ExpenseItem.module.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <div className={styles['expense-item']}>
      <ExpenseDate date={date} />
      <div className={styles['expense-item__description']}>
        <h2>{title}</h2>
        <div className={styles['expense-item__price']}>${amount}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
