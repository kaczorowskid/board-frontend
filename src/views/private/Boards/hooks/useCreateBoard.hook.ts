import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { CreateBoardRequest, CreateBoardResponse, createBoard } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';

export const useCreateBoard = (): UseMutationResult<
  CreateBoardResponse,
  Error,
  CreateBoardRequest
> =>
  useMutation(createBoard, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([
        QueryKeys.GET_TABLES_WITH_PAGINATION
      ]);
    }
  });
