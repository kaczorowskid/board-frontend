import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import { registerUser } from 'api';
import {
  RegisterUserRequest,
  RegisterUserResponse
} from 'contracts/user.contracts';
import { i18n } from 'utils';

export const useRegister = (): UseMutationResult<
  RegisterUserResponse,
  Error,
  RegisterUserRequest
> =>
  useMutation(registerUser, {
    onSuccess: () => {
      message.success(i18n.t('public.register.user-has-been-registered'));
    },
    onError: () => {
      message.error(i18n.t('public.register.user-has-not-been-registered'));
    }
  });
