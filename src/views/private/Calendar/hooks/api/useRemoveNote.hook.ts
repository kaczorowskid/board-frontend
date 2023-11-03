import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { removeNote } from 'api';
import { QueryKeys } from 'enums';
import {
  Operation,
  errorMessagge,
  i18n,
  queryClient,
  successMessagge
} from 'utils';
import { RemoveNoteRequest, RemoveNoteResponse } from 'contracts';

export const useRemoveNote = (): UseMutationResult<
  RemoveNoteResponse,
  Error,
  RemoveNoteRequest
> =>
  useMutation(removeNote, {
    onSuccess: async () => {
      successMessagge(i18n.t('private.calendar.note'), Operation.DELETE);
      await queryClient.invalidateQueries([QueryKeys.GET_CALENDAR]);
    },
    onError: () => {
      errorMessagge(i18n.t('private.calendar.note'), Operation.DELETE);
    }
  });
