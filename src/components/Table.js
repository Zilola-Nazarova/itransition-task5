import { useSelector } from 'react-redux';
import { useInfiniteQuery } from '@tanstack/react-query';
import { generateUsers } from '../helpers/faker';
import TableRow from './TableRow';
import TableContent from './TableContent';

const Table = () => {
  const region = useSelector((state) => state.region.value);
  const seed = useSelector((state) => state.seed.value);
  const fetchUsers = ({ pageParam }) => generateUsers(region, pageParam);

  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    {
      queryKey: ['users', seed, region],
      queryFn: fetchUsers,
      initialPageParam: 20,
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.length ? 20 : undefined;
        return nextPage;
      },
    },
  );

  const content = data?.pages.map((users, pages) => users.map((user, i) => (
    <TableRow key={user.userId} user={user} index={pages * 20 + i + 1} />
  )));

  if (status === 'pending') {
    return <p>Loading...</p>;
  }
  if (status === 'error') {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  const getButtonMessage = () => {
    if (isFetchingNextPage) {
      return 'Loading more data...';
    }
    if (hasNextPage) {
      return 'Load more';
    }
    return 'Nothing more to load';
  };

  return (
    <div>
      <TableContent content={content} />
      <button
        type="button"
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {getButtonMessage()}
      </button>
    </div>
  );
};

export default Table;
