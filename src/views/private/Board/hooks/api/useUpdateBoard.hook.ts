import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { UpdateBoardRequest, UpdateBoardResponse, updateBoard } from 'api';
import { MessageType, antdMessage } from 'components';

export const useUpdateBoard = (): UseMutationResult<
  UpdateBoardResponse,
  Error,
  UpdateBoardRequest
> =>
  useMutation(updateBoard, {
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
