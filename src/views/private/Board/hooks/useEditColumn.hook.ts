import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { EditColumnRequest, EditColumnResponse, editColumn } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';

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
