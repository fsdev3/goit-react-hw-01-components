import PropTypes from 'prop-types';
import { Table } from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.arrayOf(PropTypes.string.isRequired),
  type: PropTypes.arrayOf(PropTypes.string.isRequired),
  amount: PropTypes.arrayOf(PropTypes.number.isRequired),
  currency: PropTypes.arrayOf(PropTypes.string.isRequired),
};