import { UseMutationResult, useMutation } from '@tanstack/react-query';
import {
  CreateCommentRequest,
  CreateCommentResponse,
  createComment
} from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';

export const useCreateComment = (): UseMutationResult<
  CreateCommentResponse,
  Error,
  CreateCommentRequest
> =>
  useMutation(createComment, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([QueryKeys.GET_TICKET]);
      await queryClient.invalidateQueries([QueryKeys.GET_BOARD]);
    }
  });
