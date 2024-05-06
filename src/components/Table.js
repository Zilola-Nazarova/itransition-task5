import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { generateUsers } from '../helpers/faker';
import TableRow from './TableRow';
import TableContent from './TableContent';

const Table = () => {
  const { ref, inView } = useInView();
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
        const nextPage = lastPage.length ? 10 : undefined;
        return nextPage;
      },
      refetchOnWindowFocus: false,
    },
  );

  const content = data?.pages.map((users, pages) => (
    users.map((user, i) => (
      <TableRow
        innerRef={(users.length === i + 1) ? ref : null}
        key={user.userId}
        user={user}
        index={pages === 0 ? i + 1 : ((pages + 1) * 10) + i + 1}
      />
    ))
  ));

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

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

  return (
    <div>
      <TableContent content={content} />
      {isFetchingNextPage && <h3>Loading...</h3>}
    </div>
  );
};

export default Table;
