import { Dispatch, SetStateAction } from 'react';
import { ListQuery } from 'types';

type UsePaginationHelpers = {
  onChangePagination: (page: number) => void;
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

  return {
    onChangePagination
  };
};
