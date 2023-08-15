import { ListQuery } from 'types';

interface UsePaginationConfig {
  skip: number;
  take: number;
  searchValue?: string;
}

export const usePaginationConfig = (listQuery: ListQuery): UsePaginationConfig => {
  const { searchValue } = listQuery;
  const skip = listQuery.pagination.current * listQuery.pagination.pageSize - listQuery.pagination.pageSize;
  const take = listQuery.pagination.pageSize;

  return {
    skip,
    take,
    searchValue
  };
};
