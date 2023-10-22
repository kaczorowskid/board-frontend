import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { createShareToken } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';
import { CreateShareTokenRequest, CreateShareTokenResponse } from 'contracts';

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
