import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { createComment } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';
import { CreateCommentRequest, CreateCommentResponse } from 'contracts';

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
