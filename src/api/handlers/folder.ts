import { HttpMethod, apiCall } from 'api/apiCall';
import { apiUrls } from 'api/apiUrls';
import {
  CreateFolderRequest,
  CreateFolderResponse,
  GetFoldersWithPaginationRequest,
  GetFoldersWithPaginationResponse
} from 'api/types';

export const getFoldersWithPagination = async (
  payload: GetFoldersWithPaginationRequest
): Promise<GetFoldersWithPaginationResponse> => {
  const {
    folder: { getFoldersWithPagination: getFolders }
  } = apiUrls;

  const { data } = await apiCall<
    GetFoldersWithPaginationRequest,
    GetFoldersWithPaginationResponse
  >(getFolders, HttpMethod.GET, payload);

  return data;
};

export const createFolder = async (
  payload: CreateFolderRequest
): Promise<CreateFolderResponse> => {
  const {
    folder: { createFolder: create }
  } = apiUrls;

  const { data } = await apiCall<CreateFolderRequest, CreateFolderResponse>(
    create,
    HttpMethod.POST,
    payload
  );

  return data;
};
