import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { editTicket } from 'api';
import { QueryKeys } from 'enums';
import {
  Operation,
  errorMessagge,
  i18n,
  queryClient,
  successMessagge
} from 'utils';
import { EditTicketRequest, EditTicketResponse } from 'contracts';

export const useEditTicket = (): UseMutationResult<
  EditTicketResponse,
  Error,
  EditTicketRequest
> =>
  useMutation(editTicket, {
    onSuccess: async () => {
      successMessagge(i18n.t('private.board.ticket'), Operation.EDIT);
      await queryClient.invalidateQueries([QueryKeys.GET_BOARD]);
    },
    onError: () => {
      errorMessagge(i18n.t('private.board.ticket'), Operation.EDIT);
    }
  });
