import TransactionHead from './TransactionHead';
import Transaction from './Transaction';
import PropTypes from 'prop-types';
import trh from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
    return (
        <table className={trh.transactionHistory}>
  <thead>
   <TransactionHead/>
  </thead>

  <tbody>
    {items.map(item => (
        <tr key={item.id}>
            <Transaction
            type={item.type}
            amount={item.amount}
            isOnline={item.currency}
            />
        </tr>
    ))}
  </tbody>
</table>
    );
  }

  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    ),
  };
  
  export default TransactionHistory;