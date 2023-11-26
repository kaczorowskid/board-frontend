import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { confirmShareToken } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';
import {
  ConfirmShareTokenRequest,
  ConfirmShareTokenResponse
} from 'contracts/board.contracts';

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
