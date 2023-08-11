import { userId } from 'constants/userId';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetAllFoldersResponse, getAllFolders } from 'api';
import { QueryKeys } from 'enums';

export const useFetchFolders = (): UseQueryResult<GetAllFoldersResponse[], Error> =>
  useQuery([QueryKeys.GET_FOLDERS], () =>
    getAllFolders({
      user_id: userId
    })
  );
