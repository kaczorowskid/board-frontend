import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetBoardResponse, getBoard } from 'api';
import { QueryKeys } from 'enums';

export const useGetBoard = (
  id: string
): UseQueryResult<GetBoardResponse, Error> =>
  useQuery([QueryKeys.GET_BOARD], () => getBoard({ id }), {
    enabled: !!id
  });
