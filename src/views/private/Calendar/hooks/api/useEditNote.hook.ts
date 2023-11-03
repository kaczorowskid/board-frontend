import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { editNote } from 'api';
import { QueryKeys } from 'enums';
import {
  Operation,
  errorMessagge,
  i18n,
  queryClient,
  successMessagge
} from 'utils';
import { EditNoteRequest, EditNoteResponse } from 'contracts';

export const useEditNote = (): UseMutationResult<
  EditNoteResponse,
  Error,
  EditNoteRequest
> =>
  useMutation(editNote, {
    onSuccess: async () => {
      successMessagge(i18n.t('private.calendar.note'), Operation.EDIT);
      await queryClient.invalidateQueries([QueryKeys.GET_CALENDAR]);
    },
    onError: () => {
      errorMessagge(i18n.t('private.calendar.note'), Operation.EDIT);
    }
  });
