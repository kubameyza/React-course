import styles from './NewExpense.module.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
  return (
    <div className={styles['new-expense']}>
      <ExpenseForm />
    </div>
  );
};
export default NewExpense;
