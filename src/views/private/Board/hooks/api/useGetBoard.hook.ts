import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getBoard } from 'api';
import { QueryKeys } from 'enums';
import { GetBoardResponse } from 'contracts';

export const useGetBoard = (
  id: string,
  text?: string | null,
  prio?: 'high' | 'medium' | 'low' | null
): UseQueryResult<GetBoardResponse, Error> =>
  useQuery([QueryKeys.GET_BOARD, id], () => getBoard({ id, text, prio }), {
    enabled: !!id
  });
