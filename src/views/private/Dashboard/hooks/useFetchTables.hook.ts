import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetTablesWithPaginationResponse } from 'api';
import { getTablesWithPagination } from 'api/table';
import { QueryKeys } from 'enums';
import { usePaginationConfig } from 'hooks';
import { ListQuery } from 'types';
import { useUserStore } from 'stores';

export const useFetchTables = (
  listQuery: ListQuery,
  folderId: string,
  isSearchEnabled: boolean
): UseQueryResult<GetTablesWithPaginationResponse, Error> => {
  const { offset, limit, searchValue } = usePaginationConfig(listQuery);
  const { id } = useUserStore();

  const queryKey = isSearchEnabled ? [offset, limit, searchValue] : [];

  return useQuery(
    [QueryKeys.GET_TABLES_WITH_PAGINATION, folderId, queryKey],
    () =>
      getTablesWithPagination({
        user_id: id,
        folder_id: folderId,
        offset,
        limit,
        search_value: searchValue || ''
      }),
    {
      enabled: !!id
    }
  );
};
