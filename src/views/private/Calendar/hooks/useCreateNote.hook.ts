import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { CreateNoteRequest, CreateNoteResponse, createNote } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';

export const useCreateNote = (): UseMutationResult<
  CreateNoteResponse,
  Error,
  CreateNoteRequest
> =>
  useMutation(createNote, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([QueryKeys.GET_CALENDAR]);
    }
  });
