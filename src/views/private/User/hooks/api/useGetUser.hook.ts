import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getUser } from 'api';
import { QueryKeys } from 'enums';
import { GetBoardResponse } from 'contracts/board.contracts';

export const useGetUser = (
  id: string
): UseQueryResult<GetBoardResponse, Error> =>
  useQuery([QueryKeys.GET_BOARD, id], () => getUser({ id }), {
    enabled: !!id
  });
