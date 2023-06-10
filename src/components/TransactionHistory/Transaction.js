import tr from './Transaction.module.css';
import PropTypes from "prop-types";

const Transaction = ({
    id,
    type,
    amount,
    currency
}) => {
    return (
    <tr>
      <td className={tr.transaction}>{type}</td>
      <td className={tr.transaction}>{amount}</td>
      <td className={tr.transaction}>{currency}</td>
    </tr>
    );
};

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.string
    };

export default Transaction;