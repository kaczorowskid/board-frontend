import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { updatePassword } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';
import { UpdatePasswordRequest, UpdatePasswordResponse } from 'contracts';

export const useUpdatePassword = (): UseMutationResult<
  UpdatePasswordResponse,
  Error,
  UpdatePasswordRequest
> =>
  useMutation(updatePassword, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([QueryKeys.GET_USER]);
    }
  });
