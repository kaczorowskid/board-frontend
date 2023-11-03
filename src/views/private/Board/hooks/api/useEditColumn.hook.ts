import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { editColumn } from 'api';
import { QueryKeys } from 'enums';
import {
  Operation,
  errorMessagge,
  i18n,
  queryClient,
  successMessagge
} from 'utils';
import { EditColumnRequest, EditColumnResponse } from 'contracts';

export const useEditColumn = (): UseMutationResult<
  EditColumnResponse,
  Error,
  EditColumnRequest
> =>
  useMutation(editColumn, {
    onSuccess: async () => {
      successMessagge(i18n.t('private.board.column'), Operation.EDIT);
      await queryClient.invalidateQueries([QueryKeys.GET_BOARD]);
    },
    onError: () => {
      errorMessagge(i18n.t('private.board.column'), Operation.ADD);
    }
  });
