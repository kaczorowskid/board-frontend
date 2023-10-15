import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { CreateColumnRequest, CreateColumnResponse, createColumn } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';

export const useCreateColumn = (): UseMutationResult<
  CreateColumnResponse,
  Error,
  CreateColumnRequest
> =>
  useMutation(createColumn, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([QueryKeys.GET_BOARD]);
    }
  });
