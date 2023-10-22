import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { removeTicket } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';
import { RemoveTicketRequest, RemoveTicketResponse } from 'contracts';

export const useRemoveTicket = (): UseMutationResult<
  RemoveTicketResponse,
  Error,
  RemoveTicketRequest
> =>
  useMutation(removeTicket, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([QueryKeys.GET_BOARD]);
    }
  });
