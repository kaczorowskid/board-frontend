import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getBoardsWithPagination } from 'api';
import { QueryKeys } from 'enums';
import { usePaginationConfig } from 'hooks';
import { ListQuery } from 'types';
import { useUserStore } from 'stores';
import { GetBoardsWithPaginationResponse } from 'contracts/board.contracts';

export const useFetchBoards = (
  listQuery: ListQuery
): UseQueryResult<GetBoardsWithPaginationResponse, Error> => {
  const { offset, limit, searchValue } = usePaginationConfig(listQuery);
  const { id } = useUserStore();

  return useQuery(
    [QueryKeys.GET_TABLES_WITH_PAGINATION, [offset, limit, searchValue]],
    () =>
      getBoardsWithPagination({
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
