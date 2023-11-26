import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { createNote } from 'api';
import { QueryKeys } from 'enums';
import {
  Operation,
  errorMessagge,
  i18n,
  queryClient,
  successMessagge
} from 'utils';
import {
  CreateNoteRequest,
  CreateNoteResponse
} from 'contracts/calendar.contracts';

export const useCreateNote = (): UseMutationResult<
  CreateNoteResponse,
  Error,
  CreateNoteRequest
> =>
  useMutation(createNote, {
    onSuccess: async () => {
      successMessagge(i18n.t('private.calendar.note'), Operation.ADD);
      await queryClient.invalidateQueries([QueryKeys.GET_CALENDAR]);
    },
    onError: () => {
      errorMessagge(i18n.t('private.calendar.note'), Operation.ADD);
    }
  });
