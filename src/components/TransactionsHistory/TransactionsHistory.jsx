import TransactionEl from "../TransactionsEl/TransactionEl";

export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, currency, type, amount }) => {
          return (
            <TransactionEl
              key={id}
              amount={amount}
              type={type}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}
