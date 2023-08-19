import { UseMutationResult, useMutation } from '@tanstack/react-query';
import {
  SetNewPasswordUserRequest,
  SetNewPasswordUserResponse,
  setNewPasswordUser
} from 'api';
import { MessageType, antdMessage } from 'components';

export const useSetNewPassword = (): UseMutationResult<
  SetNewPasswordUserResponse,
  Error,
  SetNewPasswordUserRequest
> =>
  useMutation(setNewPasswordUser, {
    onSuccess: () => {
      antdMessage({ type: MessageType.SUCCESS, content: 'New password set' });
    },
    onError: () => {
      antdMessage({
        type: MessageType.ERROR,
        content: 'nie pojedziesz tom windom'
      });
    }
  });
