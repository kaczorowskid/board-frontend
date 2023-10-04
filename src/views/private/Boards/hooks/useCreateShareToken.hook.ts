import { UseMutationResult, useMutation } from '@tanstack/react-query';
import {
  CreateShareTokenRequest,
  CreateShareTokenResponse,
  createShareToken
} from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';

export const useCreateShareToken = (): UseMutationResult<
  CreateShareTokenResponse,
  Error,
  CreateShareTokenRequest
> =>
  useMutation(createShareToken, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([
        QueryKeys.GET_TABLES_WITH_PAGINATION
      ]);
    }
  });
