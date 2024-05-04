import { faker } from '@faker-js/faker';
import { useSelector } from 'react-redux';
import { createRandomUser } from '../helpers/faker';

const Table = () => {
  const region = useSelector((state) => state.region.value);
  const users = faker.helpers.multiple(() => createRandomUser(region), {
    count: 20,
  });

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
              <td>{user.number}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
