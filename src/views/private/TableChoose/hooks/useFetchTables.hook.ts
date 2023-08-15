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
  const { skip, take, searchValue } = usePaginationConfig(listQuery);
  const { id } = useUserStore();

  const queryKey = isSearchEnabled ? [folderId, skip, take, searchValue] : [];

  return useQuery(
    [QueryKeys.GET_TABLES_WITH_PAGINATION, queryKey],
    () =>
      getTablesWithPagination({
        user_id: id,
        folder_id: folderId,
        skip,
        take,
        search_value: searchValue || ''
      }),
    {
      enabled: !!id
    }
  );
};
