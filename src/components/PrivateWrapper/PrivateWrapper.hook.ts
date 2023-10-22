import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { authorizeUser } from 'api';
import { QueryKeys } from 'enums';
import { useNavigate } from 'react-router';
import { routesUrls } from 'routes';
import { useUserStore } from 'stores';
import { AuthorizeUserResponse } from 'contracts';

export const useAuthorizeUser = (): UseQueryResult<
  AuthorizeUserResponse,
  Error
> => {
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  return useQuery([QueryKeys.GET_USER], authorizeUser, {
    onSuccess: ({
      id,
      email,
      first_name: firstName,
      last_name: lastName,
      is_active: isActive
    }) => {
      setUser({
        id,
        email,
        firstName,
        lastName,
        isActive,
        isLoggedIn: true
      });
    },
    onError: () => {
      navigate(routesUrls.auth.login);
    }
  });
};
