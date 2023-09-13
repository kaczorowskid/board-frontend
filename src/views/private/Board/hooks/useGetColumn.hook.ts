import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetColumnResponse, getColumn } from 'api';
import { QueryKeys } from 'enums';

export const useGetColumn = (
  id: string
): UseQueryResult<GetColumnResponse, Error> =>
  useQuery([QueryKeys.GET_BOARD, id], () => getColumn({ id }), {
    enabled: !!id
  });
