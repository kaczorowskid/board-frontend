import { Dispatch, SetStateAction, useState } from 'react';
import { ListQuery } from 'types';

interface UseListQuery {
  listQuery: ListQuery;
  setListQuery: Dispatch<SetStateAction<ListQuery>>;
  defaultConfig: ListQuery;
}

export const defaultConfig: ListQuery = {
  searchValue: '',
  pagination: {
    current: 1,
    pageSize: 5
  }
};

export const useListQuery = (config?: ListQuery): UseListQuery => {
  const [listQuery, setListQuery] = useState<ListQuery>(
    config || defaultConfig
  );

  return {
    defaultConfig,
    listQuery,
    setListQuery
  };
};
