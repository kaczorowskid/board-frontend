import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { createNote } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';
import { CreateNoteRequest, CreateNoteResponse } from 'contracts';

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
