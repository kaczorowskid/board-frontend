import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { CreateTicketRequest, CreateTicketResponse, createTicket } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';

export const useCreateTicket = (): UseMutationResult<
  CreateTicketResponse,
  Error,
  CreateTicketRequest
> =>
  useMutation(createTicket, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([QueryKeys.GET_BOARD]);
    }
  });
