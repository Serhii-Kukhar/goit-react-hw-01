import css from "./TransactionsHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionTable}>
      <thead className={css.tableThead}>
        <tr className={css.tableHeader}>
          <th className={css.headerCell}>Type</th>
          <th className={css.headerCell}>Amount</th>
          <th className={css.headerCell}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableTbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.tableRow}>
            <td className={css.tableCell}>{type}</td>
            <td className={css.tableCell}>{amount}</td>
            <td className={css.tableCell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
