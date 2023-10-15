import { UseMutationResult, useMutation } from '@tanstack/react-query';
import {
  ConfirmShareTokenRequest,
  ConfirmShareTokenResponse,
  confirmShareToken
} from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';

export const useConfirmShareToken = (): UseMutationResult<
  ConfirmShareTokenResponse,
  Error,
  ConfirmShareTokenRequest
> =>
  useMutation(confirmShareToken, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([
        QueryKeys.GET_TABLES_WITH_PAGINATION
      ]);
    }
  });
