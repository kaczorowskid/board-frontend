import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetFoldersWithPaginationResponse, getFoldersWithPagination } from 'api';
import { QueryKeys } from 'enums';
import { usePaginationConfig } from 'hooks';
import { ListQuery } from 'types';
import { useUserStore } from 'stores';

export const useFetchFolders = (
  listQuery: ListQuery,
  isSearchEnabled: boolean
): UseQueryResult<GetFoldersWithPaginationResponse, Error> => {
  const { skip, take, searchValue } = usePaginationConfig(listQuery);
  const { id } = useUserStore();

  const queryKey = isSearchEnabled ? [id, skip, take, searchValue] : [];

  return useQuery(
    [QueryKeys.GET_FOLDERS_WITH_PAGINATION, queryKey],
    () =>
      getFoldersWithPagination({
        user_id: id,
        skip,
        take,
        search_value: searchValue || ''
      }),
    {
      enabled: !!id
    }
  );
};
