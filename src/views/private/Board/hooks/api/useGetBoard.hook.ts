import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getBoard } from 'api';
import { QueryKeys } from 'enums';
import { GetBoardResponse } from 'contracts';

export const useGetBoard = (
  id: string
): UseQueryResult<GetBoardResponse, Error> =>
  useQuery([QueryKeys.GET_BOARD, id], () => getBoard({ id }), {
    enabled: !!id
  });
