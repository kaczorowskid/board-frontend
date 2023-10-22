import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { removeComment } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';
import { RemoveCommentRequest, RemoveCommentResponse } from 'contracts';

export const useRemoveComment = (): UseMutationResult<
  RemoveCommentResponse,
  Error,
  RemoveCommentRequest
> =>
  useMutation(removeComment, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([QueryKeys.GET_TICKET]);
      await queryClient.invalidateQueries([QueryKeys.GET_BOARD]);
    }
  });
