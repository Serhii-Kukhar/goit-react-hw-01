import css from "./TransactionsHistory.module.css";
import { PiHandWithdrawLight } from "react-icons/pi";
import { FaFileInvoice } from "react-icons/fa";
import { SiContactlesspayment } from "react-icons/si";
import { PiHandDeposit } from "react-icons/pi";

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
            <td className={css.tableCell}>
              {type}
              {type.toLowerCase().includes("withdrawal") && (
                <PiHandWithdrawLight className={css.icon} />
              )}
              {type.toLowerCase().includes("invoice") && (
                <FaFileInvoice className={css.icon} />
              )}
              {type.toLowerCase().includes("payment") && (
                <SiContactlesspayment className={css.icon} />
              )}
              {type.toLowerCase().includes("deposit") && (
                <PiHandDeposit className={css.icon} />
              )}
            </td>

            <td className={css.tableCell}>{amount}</td>
            <td className={css.tableCell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
