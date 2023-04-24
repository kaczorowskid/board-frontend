import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { ConfirmAccountUserRequest, ConfirmAccountUserResponse, confirmAccountUser } from 'api';
import { MessageType, antdMessage } from 'components';

export const useConfirmAccount = (): UseMutationResult<ConfirmAccountUserResponse, Error, ConfirmAccountUserRequest> =>
  useMutation(confirmAccountUser, {
    onSuccess: () => {
      antdMessage({ type: MessageType.SUCCESS, content: 'User has been logged' });
    },
    onError: () => {
      antdMessage({ type: MessageType.ERROR, content: 'nie pojedziesz tom windom' });
    }
  });
