import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getBoard } from 'api';
import { QueryKeys } from 'enums';
import { GetBoardResponse } from 'contracts/board.contracts';
import { Prio } from 'types';

export const useGetBoard = (
  id: string,
  text?: string | null,
  prio?: Prio | null
): UseQueryResult<GetBoardResponse, Error> =>
  useQuery([QueryKeys.GET_BOARD, id], () => getBoard({ id, text, prio }), {
    enabled: !!id
  });
