import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { editColumn } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';
import { EditColumnRequest, EditColumnResponse } from 'contracts';

export const useEditColumn = (): UseMutationResult<
  EditColumnResponse,
  Error,
  EditColumnRequest
> =>
  useMutation(editColumn, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([QueryKeys.GET_BOARD]);
    }
  });
