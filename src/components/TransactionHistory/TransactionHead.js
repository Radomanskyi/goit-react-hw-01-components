import th from './TransactionHead.module.css';

const TransactionHead = () => {
    return (
  <thead >
    <tr>
      <th className={th.headName}>Type</th>
      <th className={th.headName}>Amount</th>
      <th className={th.headName}>Currency</th>
    </tr>
  </thead>
    );
};

export default TransactionHead;