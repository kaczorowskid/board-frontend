import { userToken } from 'constants/token';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { LoginUserRequest, LoginUserResponse, loginUser } from 'api';
import { MessageType, antdMessage } from 'components';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from 'stores';

export const useLogin = (): UseMutationResult<
  LoginUserResponse,
  Error,
  LoginUserRequest
> => {
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  return useMutation(loginUser, {
    onSuccess: ({ id, name, email, is_active: isActive }) => {
      localStorage.setItem(userToken, id);
      setUser({
        id,
        name,
        email,
        isActive,
        isLoggedIn: true
      });
      antdMessage({
        type: MessageType.SUCCESS,
        content: 'User has been logged'
      });
      navigate('/choose');
    },
    onError: () => {
      antdMessage({
        type: MessageType.ERROR,
        content: 'nie pojedziesz tom windom'
      });
    }
  });
};
