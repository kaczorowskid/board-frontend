import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { CreateTableRequest, CreateTableResponse } from 'api';
import { createTable } from 'api/table';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';

export const useCreate = (): UseMutationResult<
  CreateTableResponse,
  Error,
  CreateTableRequest
> => {
  const a = '';

  return useMutation(createTable, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([
        QueryKeys.GET_TABLES_WITH_PAGINATION
      ]);
    }
  });
};
