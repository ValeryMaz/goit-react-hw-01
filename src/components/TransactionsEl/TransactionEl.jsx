export default function TransactionEl({ id, amount, currency, type }) {
  return (
    <>
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </>
  );
}
