import { userId } from 'constants/userId';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetTablesWithPaginationResponse } from 'api';
import { getTablesWithPagination } from 'api/table';
import { QueryKeys } from 'enums';
import { usePaginationConfig } from 'hooks';
import { ListQuery } from 'types';

export const useTables = (listQuery: ListQuery): UseQueryResult<GetTablesWithPaginationResponse, Error> => {
  const { skip, take } = usePaginationConfig(listQuery);

  return useQuery([QueryKeys.GET_TABLES_WITH_PAGINATION, skip, take], () =>
    getTablesWithPagination({
      user_id: userId,
      skip,
      take
    })
  );
};
