import PropTypes from 'prop-types';

const TableRow = ({ innerRef, user, index }) => (
  <tr key={user.userId} ref={innerRef}>
    <td>{index}</td>
    <td>{user.userId}</td>
    <td>{user.fullName}</td>
    <td>{user.address}</td>
    <td>{user.number}</td>
  </tr>
);

TableRow.propTypes = {
  innerRef: PropTypes.func,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

TableRow.defaultProps = {
  innerRef: null,
};

export default TableRow;
