import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { EditNoteRequest, EditNoteResponse, editNote } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';

export const useEditNote = (): UseMutationResult<
  EditNoteResponse,
  Error,
  EditNoteRequest
> =>
  useMutation(editNote, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([QueryKeys.GET_CALENDAR]);
    }
  });
