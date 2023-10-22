import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { registerUser } from 'api';
import { MessageType, antdMessage } from 'components';
import { RegisterUserRequest, RegisterUserResponse } from 'contracts';

export const useRegister = (): UseMutationResult<
  RegisterUserResponse,
  Error,
  RegisterUserRequest
> =>
  useMutation(registerUser, {
    onSuccess: () => {
      antdMessage({
        type: MessageType.SUCCESS,
        content: 'User has been registered'
      });
    },
    onError: () => {
      antdMessage({
        type: MessageType.ERROR,
        content: 'nie pojedziesz tom windom'
      });
    }
  });
