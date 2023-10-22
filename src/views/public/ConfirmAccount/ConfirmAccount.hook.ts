import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { confirmAccountUser } from 'api';
import { MessageType, antdMessage } from 'components';
import {
  ConfirmAccountUserRequest,
  ConfirmAccountUserResponse
} from 'contracts';

export const useConfirmAccount = (): UseMutationResult<
  ConfirmAccountUserResponse,
  Error,
  ConfirmAccountUserRequest
> =>
  useMutation(confirmAccountUser, {
    onSuccess: () => {
      antdMessage({
        type: MessageType.SUCCESS,
        content: 'User has been logged'
      });
    },
    onError: () => {
      antdMessage({
        type: MessageType.ERROR,
        content: 'nie pojedziesz tom windom'
      });
    }
  });
