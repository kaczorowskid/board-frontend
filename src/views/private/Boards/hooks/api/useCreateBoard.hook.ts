import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { createBoard } from 'api';
import { QueryKeys } from 'enums';
import {
  Operation,
  errorMessagge,
  i18n,
  queryClient,
  successMessagge
} from 'utils';
import { CreateBoardRequest, CreateBoardResponse } from 'contracts';

export const useCreateBoard = (): UseMutationResult<
  CreateBoardResponse,
  Error,
  CreateBoardRequest
> =>
  useMutation(createBoard, {
    onSuccess: async () => {
      successMessagge(i18n.t('private.boards.boards'), Operation.ADD);
      await queryClient.invalidateQueries([
        QueryKeys.GET_TABLES_WITH_PAGINATION
      ]);
    },
    onError: () => {
      errorMessagge(i18n.t('private.boards.boards'), Operation.ADD);
    }
  });
