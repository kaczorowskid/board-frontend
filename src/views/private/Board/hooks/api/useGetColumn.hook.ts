import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getColumn } from 'api';
import { QueryKeys } from 'enums';
import { GetColumnResponse } from 'contracts';

export const useGetColumn = (
  id: string
): UseQueryResult<GetColumnResponse, Error> =>
  useQuery([QueryKeys.GET_BOARD, id], () => getColumn({ id }), {
    enabled: !!id
  });
