import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getTicket } from 'api';
import { QueryKeys } from 'enums';
import { GetTicketResponse } from 'contracts';

export const useGetTicket = (
  id: string
): UseQueryResult<GetTicketResponse, Error> =>
  useQuery([QueryKeys.GET_TICKET, id], () => getTicket({ id }), {
    enabled: !!id
  });
