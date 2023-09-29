import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AuthorizeUserResponse, authorizeUser } from 'api';
import { QueryKeys } from 'enums';
import { useNavigate } from 'react-router';
import { routesUrls } from 'routes';
import { useUserStore } from 'stores';

export const useAuthorizeUser = (): UseQueryResult<
  AuthorizeUserResponse,
  Error
> => {
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  return useQuery([QueryKeys.GET_USER], authorizeUser, {
    onSuccess: ({ id, email, name, is_active: isActive }) => {
      setUser({
        id,
        email,
        name,
        isActive,
        isLoggedIn: true
      });
    },
    onError: () => {
      navigate(routesUrls.auth.login);
    }
  });
};
