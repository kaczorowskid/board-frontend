import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { createColumn } from 'api';
import { QueryKeys } from 'enums';
import {
  Operation,
  errorMessagge,
  i18n,
  queryClient,
  successMessagge
} from 'utils';
import {
  CreateColumnRequest,
  CreateColumnResponse
} from 'contracts/board.contracts';

export const useCreateColumn = (): UseMutationResult<
  CreateColumnResponse,
  Error,
  CreateColumnRequest
> =>
  useMutation(createColumn, {
    onSuccess: async () => {
      successMessagge(i18n.t('private.board.column'), Operation.ADD);
      await queryClient.invalidateQueries([QueryKeys.GET_BOARD]);
    },
    onError: () => {
      errorMessagge(i18n.t('private.board.column'), Operation.ADD);
    }
  });
