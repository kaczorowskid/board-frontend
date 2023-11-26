import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { loginUser } from 'api';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from 'stores';
import { routesUrls } from 'routes';
import { LoginUserRequest, LoginUserResponse } from 'contracts/user.contracts';
import { message } from 'antd';
import { i18n } from 'utils';

export const useLogin = (): UseMutationResult<
  LoginUserResponse,
  Error,
  LoginUserRequest
> => {
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  return useMutation(loginUser, {
    onSuccess: ({
      id,
      first_name: firstName,
      last_name: lastName,
      email,
      is_active: isActive
    }) => {
      setUser({
        id,
        firstName,
        lastName,
        email,
        isActive,
        isLoggedIn: true
      });
      message.success(i18n.t('public.login.user-has-been-logged'));
      navigate(routesUrls.app.dashboard);
    },
    onError: () => {
      message.error(i18n.t('public.login.user-has-not-been-logged'));
    }
  });
};
