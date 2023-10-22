import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { removeBoard } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';
import { RemoveBoardRequest, RemoveBoardResponse } from 'contracts';

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
