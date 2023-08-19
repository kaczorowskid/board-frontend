import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetTablesWithPaginationResponse } from 'api';
import { getTablesWithPagination } from 'api/table';
import { QueryKeys } from 'enums';
import { usePaginationConfig } from 'hooks';
import { ListQuery } from 'types';
import { useUserStore } from 'stores';

export const useFetchTables = (
  listQuery: ListQuery
): UseQueryResult<GetTablesWithPaginationResponse, Error> => {
  const { offset, limit, searchValue } = usePaginationConfig(listQuery);
  const { id } = useUserStore();

  return useQuery(
    [QueryKeys.GET_TABLES_WITH_PAGINATION, [offset, limit, searchValue]],
    () =>
      getTablesWithPagination({
        user_id: id,
        folder_id: undefined,
        offset,
        limit,
        search_value: searchValue || ''
      }),
    {
      enabled: !!id
    }
  );
};
