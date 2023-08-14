// import { userId } from 'constants/userId';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetTablesWithPaginationResponse } from 'api';
import { getTablesWithPagination } from 'api/table';
import { QueryKeys } from 'enums';
import { usePaginationConfig } from 'hooks';
import { ListQuery } from 'types';
import { useUserStore } from 'stores';

export const useFetchTables = (
  listQuery: ListQuery,
  folderId: string
): UseQueryResult<GetTablesWithPaginationResponse, Error> => {
  const { skip, take } = usePaginationConfig(listQuery);
  const { id } = useUserStore();

  return useQuery(
    [QueryKeys.GET_TABLES_WITH_PAGINATION, folderId, skip, take],
    () =>
      getTablesWithPagination({
        user_id: id,
        folder_id: folderId,
        skip,
        take
      }),
    {
      enabled: Boolean(id)
    }
  );
};
