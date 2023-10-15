import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { RemoveTicketRequest, RemoveTicketResponse, removeTicket } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';

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
