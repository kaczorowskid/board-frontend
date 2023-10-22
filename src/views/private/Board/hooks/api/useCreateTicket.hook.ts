import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { createTicket } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';
import { CreateTicketRequest, CreateTicketResponse } from 'contracts';

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
