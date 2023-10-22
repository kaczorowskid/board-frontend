import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { createBoard } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';
import { CreateBoardRequest, CreateBoardResponse } from 'contracts';

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
