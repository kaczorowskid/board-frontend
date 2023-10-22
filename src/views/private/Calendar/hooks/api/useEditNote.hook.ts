import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { editNote } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';
import { EditNoteRequest, EditNoteResponse } from 'contracts';

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
