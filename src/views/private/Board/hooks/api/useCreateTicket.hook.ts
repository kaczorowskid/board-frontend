import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { createTicket } from 'api';
import { QueryKeys } from 'enums';
import {
  Operation,
  errorMessagge,
  i18n,
  queryClient,
  successMessagge
} from 'utils';
import { CreateTicketRequest, CreateTicketResponse } from 'contracts';

export const useCreateTicket = (): UseMutationResult<
  CreateTicketResponse,
  Error,
  CreateTicketRequest
> =>
  useMutation(createTicket, {
    onSuccess: async () => {
      successMessagge(i18n.t('private.board.ticket'), Operation.ADD);
      await queryClient.invalidateQueries([QueryKeys.GET_BOARD]);
    },
    onError: () => {
      errorMessagge(i18n.t('private.board.ticket'), Operation.ADD);
    }
  });
