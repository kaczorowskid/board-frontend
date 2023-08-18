import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { CreateFolderRequest, CreateFolderResponse, createFolder } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';

export const useCreate = (): UseMutationResult<CreateFolderResponse, Error, CreateFolderRequest> => {
  const a = '';

  return useMutation(createFolder, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([QueryKeys.GET_FOLDERS_WITH_PAGINATION]);
    }
  });
};
