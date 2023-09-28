import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetUserResponse, getUser } from 'api';
import { QueryKeys } from 'enums';
import { useNavigate } from 'react-router-dom';
import { routesUrls } from 'routes';
import { useUserStore } from 'stores';

export const useAuthorization = (): UseQueryResult<GetUserResponse, Error> => {
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  return useQuery([QueryKeys.GET_USER], getUser, {
    onSuccess: ({ id, email, name, is_active: isActive }) => {
      setUser({
        id,
        email,
        name,
        isActive,
        isLoggedIn: true
      });
      navigate(routesUrls.app.dashboard);
    },
    onError: () => {
      navigate(routesUrls.auth.login);
    }
  });
};
