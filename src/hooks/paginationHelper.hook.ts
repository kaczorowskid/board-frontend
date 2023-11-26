import { TablePaginationConfig } from 'antd';
import { FilterValue } from 'antd/es/table/interface';
import { Dispatch, SetStateAction, useState } from 'react';
import { ListQuery } from 'types';

type UsePaginationHelpers = {
  listQuery: ListQuery;
  setListQuery: Dispatch<SetStateAction<ListQuery>>;
  onSearchPagination: (value: string) => void;
  onHandleTableChange: (
    pagination: TablePaginationConfig,
    _: Record<string, FilterValue | null>,
    sorter: any
  ) => void;
};

export const defaultConfig: ListQuery = {
  searchValue: '',
  pagination: {
    current: 1,
    pageSize: 5
  }
};

export const usePaginationHelpers = (): UsePaginationHelpers => {
  const [listQuery, setListQuery] = useState<ListQuery>(defaultConfig);

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

  const onSearchPagination = (value: string): void => {
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
    listQuery,
    setListQuery,
    onSearchPagination,
    onHandleTableChange
  };
};
