import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { updateUser } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';
import { UpdateUserRequest, UpdateUserResponse } from 'contracts';

export const useUpdateUser = (): UseMutationResult<
  UpdateUserResponse,
  Error,
  UpdateUserRequest
> =>
  useMutation(updateUser, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([QueryKeys.GET_USER]);
    }
  });
