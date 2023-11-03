import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { updatePassword } from 'api';
import { QueryKeys } from 'enums';
import {
  Operation,
  errorMessagge,
  i18n,
  queryClient,
  successMessagge
} from 'utils';
import { UpdatePasswordRequest, UpdatePasswordResponse } from 'contracts';

export const useUpdatePassword = (): UseMutationResult<
  UpdatePasswordResponse,
  Error,
  UpdatePasswordRequest
> =>
  useMutation(updatePassword, {
    onSuccess: async () => {
      successMessagge(i18n.t('private.user.password'), Operation.UPDATE);
      await queryClient.invalidateQueries([QueryKeys.GET_USER]);
    },
    onError: () => {
      errorMessagge(i18n.t('private.user.password'), Operation.UPDATE);
    }
  });
