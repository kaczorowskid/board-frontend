import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { RemoveNoteRequest, RemoveNoteResponse, removeNote } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';

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
