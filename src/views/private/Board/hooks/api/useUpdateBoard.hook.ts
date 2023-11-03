import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { updateBoard } from 'api';
import { UpdateBoardRequest, UpdateBoardResponse } from 'contracts';
import { Operation, errorMessagge, i18n, successMessagge } from 'utils';

export const useUpdateBoard = (): UseMutationResult<
  UpdateBoardResponse,
  Error,
  UpdateBoardRequest
> =>
  useMutation(updateBoard, {
    onSuccess: async () => {
      successMessagge(i18n.t('private.board.board'), Operation.UPDATE);
    },
    onError: () => {
      errorMessagge(i18n.t('private.board.board'), Operation.UPDATE);
    }
  });
