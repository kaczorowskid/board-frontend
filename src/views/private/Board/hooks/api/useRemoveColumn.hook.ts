import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { removeColumn } from 'api';
import { QueryKeys } from 'enums';
import {
  Operation,
  errorMessagge,
  i18n,
  queryClient,
  successMessagge
} from 'utils';
import { RemoveColumnRequest, RemoveColumnResponse } from 'contracts';

export const useRemoveColumn = (): UseMutationResult<
  RemoveColumnResponse,
  Error,
  RemoveColumnRequest
> =>
  useMutation(removeColumn, {
    onSuccess: async () => {
      successMessagge(i18n.t('private.board.column'), Operation.DELETE);
      await queryClient.invalidateQueries([QueryKeys.GET_BOARD]);
    },
    onError: () => {
      errorMessagge(i18n.t('private.board.column'), Operation.DELETE);
    }
  });
