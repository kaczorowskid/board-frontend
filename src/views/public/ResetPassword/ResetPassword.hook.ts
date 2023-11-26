import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import { resetPasswordUser } from 'api';
import {
  ResetPasswordUserRequest,
  ResetPasswordUserResponse
} from 'contracts/user.contracts';
import { i18n } from 'utils';

export const useResetPassword = (): UseMutationResult<
  ResetPasswordUserResponse,
  Error,
  ResetPasswordUserRequest
> =>
  useMutation(resetPasswordUser, {
    onSuccess: () => {
      message.success(i18n.t('public.reset-password.password-has-been-reset'));
    },
    onError: () => {
      message.error(
        i18n.t('public.reset-password.password-has-not-been-reset')
      );
    }
  });
