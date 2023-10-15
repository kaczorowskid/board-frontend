import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { RemoveBoardRequest, RemoveBoardResponse, removeBoard } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';

export const useRemoveBoard = (): UseMutationResult<
  RemoveBoardResponse,
  Error,
  RemoveBoardRequest
> =>
  useMutation(removeBoard, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([
        QueryKeys.GET_TABLES_WITH_PAGINATION
      ]);
    }
  });
