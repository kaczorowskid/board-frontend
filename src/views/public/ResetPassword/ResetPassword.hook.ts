import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { resetPasswordUser } from 'api';
import { MessageType, antdMessage } from 'components';
import { ResetPasswordUserRequest, ResetPasswordUserResponse } from 'contracts';

export const useResetPassword = (): UseMutationResult<
  ResetPasswordUserResponse,
  Error,
  ResetPasswordUserRequest
> =>
  useMutation(resetPasswordUser, {
    onSuccess: () => {
      antdMessage({
        type: MessageType.SUCCESS,
        content: 'Password has been reset'
      });
    },
    onError: () => {
      antdMessage({
        type: MessageType.ERROR,
        content: 'nie pojedziesz tom windom'
      });
    }
  });
