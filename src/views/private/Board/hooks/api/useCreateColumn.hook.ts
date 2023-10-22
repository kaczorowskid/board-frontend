import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { createColumn } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';
import { CreateColumnRequest, CreateColumnResponse } from 'contracts';

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
