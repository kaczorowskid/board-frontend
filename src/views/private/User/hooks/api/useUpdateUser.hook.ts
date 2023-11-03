import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { updateUser } from 'api';
import { QueryKeys } from 'enums';
import {
  Operation,
  errorMessagge,
  i18n,
  queryClient,
  successMessagge
} from 'utils';
import { UpdateUserRequest, UpdateUserResponse } from 'contracts';

export const useUpdateUser = (): UseMutationResult<
  UpdateUserResponse,
  Error,
  UpdateUserRequest
> =>
  useMutation(updateUser, {
    onSuccess: async () => {
      successMessagge(i18n.t('private.user.user'), Operation.UPDATE);
      await queryClient.invalidateQueries([QueryKeys.GET_USER]);
    },
    onError: () => {
      errorMessagge(i18n.t('private.user.user'), Operation.UPDATE);
    }
  });
