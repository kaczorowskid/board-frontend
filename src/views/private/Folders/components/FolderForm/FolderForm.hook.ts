import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { CreateFolderRequest, CreateFolderResponse, createFolder } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';

export const useCreateFolder = (): UseMutationResult<CreateFolderResponse, Error, CreateFolderRequest> =>
  useMutation(createFolder, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([QueryKeys.GET_FOLDERS_WITH_PAGINATION]);
    }
  });
