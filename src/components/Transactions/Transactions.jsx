import CSS from './styles.module.css';
import React from 'react';

const Transactions = ({ items }) => {
  return (
    <table className={CSS.transactionHistory}>
      <thead>
        <tr>
          <th className={CSS.header}>Type</th>
          <th className={CSS.header}>Amount</th>
          <th className={CSS.header}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={CSS.type}>{item.type.toUpperCase()}</td>
            <td className={CSS.amount}>{item.amount}</td>
            <td className={CSS.currency}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Transactions;
