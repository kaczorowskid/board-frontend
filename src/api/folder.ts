import { HttpMethod, apiCall, apiUrls } from 'utils';
import {
  CreateFolderRequest,
  CreateFolderResponse,
  GetAllFoldersRequest,
  GetAllFoldersResponse,
  GetFoldersWithPaginationRequest,
  GetFoldersWithPaginationResponse
} from './types';

export const getAllFolders = async (payload: GetAllFoldersRequest): Promise<GetAllFoldersResponse[]> => {
  const {
    folder: { getAllFolders: getTables }
  } = apiUrls;

  const { data } = await apiCall<GetAllFoldersRequest, GetAllFoldersResponse[]>(getTables, HttpMethod.GET, payload);

  return data;
};

export const getFoldersWithPagination = async (
  payload: GetFoldersWithPaginationRequest
): Promise<GetFoldersWithPaginationResponse> => {
  const {
    folder: { getFoldersWithPagination: getFolders }
  } = apiUrls;

  const { data } = await apiCall<GetFoldersWithPaginationRequest, GetFoldersWithPaginationResponse>(
    getFolders,
    HttpMethod.GET,
    payload
  );

  return data;
};

export const createFolder = async (payload: CreateFolderRequest): Promise<CreateFolderResponse> => {
  const {
    folder: { createFolder: create }
  } = apiUrls;

  const { data } = await apiCall<CreateFolderRequest, CreateFolderResponse>(create, HttpMethod.POST, payload);

  return data;
};
