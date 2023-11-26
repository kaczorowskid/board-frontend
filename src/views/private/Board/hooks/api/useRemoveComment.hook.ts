import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { removeComment } from 'api';
import { QueryKeys } from 'enums';
import {
  Operation,
  errorMessagge,
  i18n,
  queryClient,
  successMessagge
} from 'utils';
import {
  RemoveCommentRequest,
  RemoveCommentResponse
} from 'contracts/comment.contracts';

export const useRemoveComment = (): UseMutationResult<
  RemoveCommentResponse,
  Error,
  RemoveCommentRequest
> =>
  useMutation(removeComment, {
    onSuccess: async () => {
      successMessagge(i18n.t('private.board.comment'), Operation.DELETE);
      await queryClient.invalidateQueries([QueryKeys.GET_TICKET]);
      await queryClient.invalidateQueries([QueryKeys.GET_BOARD]);
    },
    onError: () => {
      errorMessagge(i18n.t('private.board.comment'), Operation.DELETE);
    }
  });
