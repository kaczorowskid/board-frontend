import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetFoldersWithPaginationResponse, getFoldersWithPagination } from 'api';
import { QueryKeys } from 'enums';
import { usePaginationConfig } from 'hooks';
import { ListQuery } from 'types';
import { useUserStore } from 'stores';

export const useFetchFolders = (listQuery: ListQuery): UseQueryResult<GetFoldersWithPaginationResponse, Error> => {
  const { offset, limit, searchValue } = usePaginationConfig(listQuery);
  const { id } = useUserStore();

  return useQuery(
    [QueryKeys.GET_FOLDERS_WITH_PAGINATION, [id, offset, limit, searchValue]],
    () =>
      getFoldersWithPagination({
        user_id: id,
        offset,
        limit,
        search_value: searchValue || ''
      }),
    {
      enabled: !!id
    }
  );
};
