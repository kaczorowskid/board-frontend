import { ListQuery } from 'types';

interface UsePaginationConfig {
  skip: number;
  take: number;
}

export const usePaginationConfig = (listQuery: ListQuery): UsePaginationConfig => {
  const skip = listQuery.pagination.current * listQuery.pagination.pageSize - listQuery.pagination.pageSize;
  const take = listQuery.pagination.pageSize;

  return {
    skip,
    take
  };
};
