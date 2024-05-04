import { useSelector } from 'react-redux';
import { generateUsers } from '../helpers/faker';

const Table = () => {
  const region = useSelector((state) => state.region.value);
  const seed = useSelector((state) => state.seed.value);
  const users = generateUsers(region, seed);

  return (
    <div>
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
          { users.map((user, i) => (
            <tr key={user.userId}>
              <td>{i + 1}</td>
              <td>{user.userId}</td>
              <td>{user.fullName}</td>
              <td>{user.address}</td>
              <td>{user.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
