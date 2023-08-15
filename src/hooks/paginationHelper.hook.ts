import { Dispatch, SetStateAction } from 'react';
import { ListQuery } from 'types';

type UsePaginationHelpers = {
  onChangePagination: (page: number) => void;
  onSearchPagination: (value: string) => void;
};

export const usePaginationHelpers = (
  listQuery: ListQuery,
  setListQuery: Dispatch<SetStateAction<ListQuery>>
): UsePaginationHelpers => {
  const onChangePagination = (page: number): void => {
    setListQuery((prev) => ({
      ...prev,
      pagination: {
        ...prev.pagination,
        current: listQuery.pagination.current + page
      }
    }));
  };

  const onSearchPagination = (value: string) => {
    setListQuery((prev) => ({
      ...prev,
      searchValue: value,
      pagination: {
        ...prev.pagination,
        current: 1
      }
    }));
  };

  return {
    onChangePagination,
    onSearchPagination
  };
};
