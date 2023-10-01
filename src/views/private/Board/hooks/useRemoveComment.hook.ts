import { UseMutationResult, useMutation } from '@tanstack/react-query';
import {
  RemoveCommentRequest,
  RemoveCommentResponse,
  removeComment
} from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';

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
