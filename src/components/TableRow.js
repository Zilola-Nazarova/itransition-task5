import PropTypes from 'prop-types';

const TableRow = ({ user, index }) => (
  <tr key={user.userId}>
    <td>{index}</td>
    <td>{user.userId}</td>
    <td>{user.fullName}</td>
    <td>{user.address}</td>
    <td>{user.number}</td>
  </tr>
);

TableRow.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default TableRow;
