import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { removeNote } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';
import { RemoveNoteRequest, RemoveNoteResponse } from 'contracts';

export const useRemoveNote = (): UseMutationResult<
  RemoveNoteResponse,
  Error,
  RemoveNoteRequest
> =>
  useMutation(removeNote, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([QueryKeys.GET_CALENDAR]);
    }
  });
