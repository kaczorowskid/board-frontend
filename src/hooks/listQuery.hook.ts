import { Dispatch, SetStateAction, useState } from 'react';
import { ListQuery } from 'types';

interface UseListQuery {
  listQuery: ListQuery;
  setListQuery: Dispatch<SetStateAction<ListQuery>>;
  defaultConfig: ListQuery;
}

export const defaultConfig: ListQuery = {
  pagination: {
    current: 1,
    pageSize: 4
  }
};

export const useListQuery = (): UseListQuery => {
  const [listQuery, setListQuery] = useState<ListQuery>(defaultConfig);

  return {
    defaultConfig,
    listQuery,
    setListQuery
  };
};
