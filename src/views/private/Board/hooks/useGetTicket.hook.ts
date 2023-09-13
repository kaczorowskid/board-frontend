import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetTicketResponse, getTicket } from 'api';
import { QueryKeys } from 'enums';

export const useGetTicket = (
  id: string
): UseQueryResult<GetTicketResponse, Error> =>
  useQuery([QueryKeys.GET_BOARD, id], () => getTicket({ id }), {
    enabled: !!id
  });
