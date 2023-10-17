import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetBoardResponse, getUser } from 'api';
import { QueryKeys } from 'enums';

export const useGetUser = (
  id: string
): UseQueryResult<GetBoardResponse, Error> =>
  useQuery([QueryKeys.GET_BOARD, id], () => getUser({ id }), {
    enabled: !!id
  });
