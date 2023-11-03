import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { createComment } from 'api';
import { QueryKeys } from 'enums';
import {
  Operation,
  errorMessagge,
  i18n,
  queryClient,
  successMessagge
} from 'utils';
import { CreateCommentRequest, CreateCommentResponse } from 'contracts';

export const useCreateComment = (): UseMutationResult<
  CreateCommentResponse,
  Error,
  CreateCommentRequest
> =>
  useMutation(createComment, {
    onSuccess: async () => {
      successMessagge(i18n.t('private.board.comment'), Operation.ADD);
      await queryClient.invalidateQueries([QueryKeys.GET_TICKET]);
      await queryClient.invalidateQueries([QueryKeys.GET_BOARD]);
    },
    onError: () => {
      errorMessagge(i18n.t('private.board.comment'), Operation.ADD);
    }
  });
