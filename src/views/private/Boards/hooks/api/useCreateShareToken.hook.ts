import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { createShareToken } from 'api';
import { QueryKeys } from 'enums';
import {
  Operation,
  errorMessagge,
  i18n,
  queryClient,
  successMessagge
} from 'utils';
import { CreateShareTokenRequest, CreateShareTokenResponse } from 'contracts';

export const useCreateShareToken = (): UseMutationResult<
  CreateShareTokenResponse,
  Error,
  CreateShareTokenRequest
> =>
  useMutation(createShareToken, {
    onSuccess: async () => {
      successMessagge(i18n.t('private.boards.share-token'), Operation.ADD);
      await queryClient.invalidateQueries([
        QueryKeys.GET_TABLES_WITH_PAGINATION
      ]);
    },
    onError: () => {
      errorMessagge(i18n.t('private.boards.share-token'), Operation.ADD);
    }
  });
