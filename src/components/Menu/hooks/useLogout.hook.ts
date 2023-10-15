import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { logout } from 'api';
import { useNavigate } from 'react-router';
import { routesUrls } from 'routes';

export const useLogout = (): UseMutationResult => {
  const navigate = useNavigate();

  return useMutation(logout, {
    onSuccess: async () => {
      navigate(routesUrls.auth.login);
    }
  });
};
