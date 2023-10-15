import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { EditBoardRequest, EditBoardResponse, editBoard } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';

export const useEditBoard = (): UseMutationResult<
  EditBoardResponse,
  Error,
  EditBoardRequest
> =>
  useMutation(editBoard, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([
        QueryKeys.GET_TABLES_WITH_PAGINATION
      ]);
    }
  });