import { TablePaginationConfig } from 'antd';
import { FilterValue } from 'antd/es/table/interface';
import { Dispatch, SetStateAction } from 'react';
import { ListQuery } from 'types';

type UsePaginationHelpers = {
  onChangePagination: (page: number) => void;
  onSearchPagination: (value: string) => void;
  onHandleTableChange: (
    pagination: TablePaginationConfig,
    _: Record<string, FilterValue | null>,
    sorter: any
  ) => void;
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

  const onHandleTableChange = (
    pagination: TablePaginationConfig,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _: Record<string, FilterValue | null>
  ): void => {
    setListQuery((prevState: any) => ({
      ...prevState,
      pagination: {
        ...prevState.pagination,
        current: pagination.current,
        pageSize: pagination.pageSize
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
    onSearchPagination,
    onHandleTableChange
  };
};
