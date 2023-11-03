import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { removeTicket } from 'api';
import { QueryKeys } from 'enums';
import {
  Operation,
  errorMessagge,
  i18n,
  queryClient,
  successMessagge
} from 'utils';
import { RemoveTicketRequest, RemoveTicketResponse } from 'contracts';

export const useRemoveTicket = (): UseMutationResult<
  RemoveTicketResponse,
  Error,
  RemoveTicketRequest
> =>
  useMutation(removeTicket, {
    onSuccess: async () => {
      successMessagge(i18n.t('private.board.ticket'), Operation.DELETE);
      await queryClient.invalidateQueries([QueryKeys.GET_BOARD]);
    },
    onError: () => {
      errorMessagge(i18n.t('private.board.ticket'), Operation.DELETE);
    }
  });
