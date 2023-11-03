import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { editBoard } from 'api';
import { QueryKeys } from 'enums';
import {
  Operation,
  errorMessagge,
  i18n,
  queryClient,
  successMessagge
} from 'utils';
import { EditBoardRequest, EditBoardResponse } from 'contracts';

export const useEditBoard = (): UseMutationResult<
  EditBoardResponse,
  Error,
  EditBoardRequest
> =>
  useMutation(editBoard, {
    onSuccess: async () => {
      successMessagge(i18n.t('private.boards.boards'), Operation.EDIT);
      await queryClient.invalidateQueries([
        QueryKeys.GET_TABLES_WITH_PAGINATION
      ]);
    },
    onError: () => {
      errorMessagge(i18n.t('private.boards.boards'), Operation.EDIT);
    }
  });
