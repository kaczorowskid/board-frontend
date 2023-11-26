import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import { setNewPasswordUser } from 'api';
import {
  SetNewPasswordUserRequest,
  SetNewPasswordUserResponse
} from 'contracts/user.contracts';
import { i18n } from 'utils';

export const useSetNewPassword = (): UseMutationResult<
  SetNewPasswordUserResponse,
  Error,
  SetNewPasswordUserRequest
> =>
  useMutation(setNewPasswordUser, {
    onSuccess: () => {
      message.success(
        i18n.t('public.set-new-password.new-password-has-been-set')
      );
    },
    onError: () => {
      message.error(
        i18n.t('public.set-new-password.new-password-has-not-been-set')
      );
    }
  });
