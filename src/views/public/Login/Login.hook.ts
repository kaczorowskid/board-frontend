import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { LoginUserRequest, LoginUserResponse, loginUser } from 'api';
import { MessageType, antdMessage } from 'components';

export const useLogin = (): UseMutationResult<LoginUserResponse, Error, LoginUserRequest> =>
  useMutation(loginUser, {
    onSuccess: () => {
      antdMessage({ type: MessageType.SUCCESS, content: 'User has been logged' });
    },
    onError: () => {
      antdMessage({ type: MessageType.ERROR, content: 'nie pojedziesz tom windom' });
    }
  });
