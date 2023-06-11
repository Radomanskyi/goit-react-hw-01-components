import TransactionHead from './TransactionHead';
import Transaction from './Transaction';
import PropTypes from 'prop-types';
import trh from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
    return (
        <table className={trh.transactionHistory}>
   <TransactionHead/>
  <tbody>
    {items.map(item => (
            <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
            />
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