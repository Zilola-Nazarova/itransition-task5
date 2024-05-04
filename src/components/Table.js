import { useSelector } from 'react-redux';
import { generateUsers } from '../helpers/faker';
import TableRow from './TableRow';
import TableContent from './TableContent';

const Table = () => {
  const region = useSelector((state) => state.region.value);
  const seed = useSelector((state) => state.seed.value);
  const users = generateUsers(region, seed);
  const content = users.map((user, i) => (
    <TableRow key={user.userId} user={user} index={i + 1} />
  ));

  return (
    <div>
      <TableContent content={content} />
    </div>
  );
};

export default Table;
