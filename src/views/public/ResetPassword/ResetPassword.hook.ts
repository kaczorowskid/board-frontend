import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { ResetPasswordUserRequest, ResetPasswordUserResponse, resetPasswordUser } from 'api';
import { MessageType, antdMessage } from 'components';

export const useResetPassword = (): UseMutationResult<ResetPasswordUserResponse, Error, ResetPasswordUserRequest> =>
  useMutation(resetPasswordUser, {
    onSuccess: () => {
      antdMessage({ type: MessageType.SUCCESS, content: 'Password has been reset' });
    },
    onError: () => {
      antdMessage({ type: MessageType.ERROR, content: 'nie pojedziesz tom windom' });
    }
  });
