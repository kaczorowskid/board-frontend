import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { removeBoard } from 'api';
import { QueryKeys } from 'enums';
import {
  Operation,
  errorMessagge,
  i18n,
  queryClient,
  successMessagge
} from 'utils';
import {
  RemoveBoardRequest,
  RemoveBoardResponse
} from 'contracts/board.contracts';

export const useRemoveBoard = (): UseMutationResult<
  RemoveBoardResponse,
  Error,
  RemoveBoardRequest
> =>
  useMutation(removeBoard, {
    onSuccess: async () => {
      successMessagge(i18n.t('private.boards.boards'), Operation.DELETE);
      await queryClient.invalidateQueries([
        QueryKeys.GET_TABLES_WITH_PAGINATION
      ]);
    },
    onError: () => {
      errorMessagge(i18n.t('private.boards.boards'), Operation.DELETE);
    }
  });
