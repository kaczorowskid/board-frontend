import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { RemoveColumnRequest, RemoveColumnResponse, removeColumn } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';

export const useRemoveColumn = (): UseMutationResult<
  RemoveColumnResponse,
  Error,
  RemoveColumnRequest
> =>
  useMutation(removeColumn, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([QueryKeys.GET_BOARD]);
    }
  });
