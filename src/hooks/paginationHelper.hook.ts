import { Dispatch, SetStateAction, useState } from 'react';
import { ListQuery } from 'types';

type UsePaginationHelpers = {
  onChangePagination: (page: number) => void;
  onChangePaginationInfinite: () => void;
};

export const usePaginationHelpers = (
  listQuery: ListQuery,
  setListQuery: Dispatch<SetStateAction<ListQuery>>
): UsePaginationHelpers => {
  const [infiniteHelperPage, setInfinitePageHelper] = useState<number>(listQuery.pagination.current);

  const onChangePagination = (page: number): void => {
    setListQuery((prev) => ({
      ...prev,
      pagination: {
        ...prev.pagination,
        current: page
      }
    }));
  };

  const onChangePaginationInfinite = (): void => {
    setInfinitePageHelper((prev) => prev + 1);
    setListQuery((prev) => ({
      ...prev,
      pagination: {
        ...prev.pagination,
        current: infiniteHelperPage
      }
    }));
  };

  return {
    onChangePagination,
    onChangePaginationInfinite
  };
};
