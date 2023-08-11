import { HttpMethod, apiCall, apiUrls } from 'utils';
import { GetAllFoldersRequest, GetAllFoldersResponse } from './types';

export const getAllFolders = async (payload: GetAllFoldersRequest): Promise<GetAllFoldersResponse[]> => {
  const {
    folder: { getAllFolders: getTables }
  } = apiUrls;

  const { data } = await apiCall<GetAllFoldersRequest, GetAllFoldersResponse[]>(getTables, HttpMethod.GET, payload);

  return data;
};
