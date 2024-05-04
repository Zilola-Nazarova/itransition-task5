import PropTypes from 'prop-types';

const TableContent = ({ content }) => (
  <table>
    <thead>
      <tr>
        <td>#</td>
        <td>ID:</td>
        <td>Name:</td>
        <td>Address:</td>
        <td>Phone number:</td>
      </tr>
    </thead>
    <tbody>
      {content}
    </tbody>
  </table>
);

TableContent.propTypes = {
  content: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default TableContent;
