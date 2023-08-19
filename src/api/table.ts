import { HttpMethod, apiCall, apiUrls } from 'utils';
import {
  CreateTableRequest,
  CreateTableResponse,
  GetTablesWithPaginationRequest,
  GetTablesWithPaginationResponse
} from './types';

export const getTablesWithPagination = async (
  payload: GetTablesWithPaginationRequest
): Promise<GetTablesWithPaginationResponse> => {
  const {
    table: { getTablesWithPagination: getTables }
  } = apiUrls;

  const { data } = await apiCall<
    GetTablesWithPaginationRequest,
    GetTablesWithPaginationResponse
  >(getTables, HttpMethod.GET, payload);

  return data;
};

export const createTable = async (
  payload: CreateTableRequest
): Promise<CreateTableResponse> => {
  const {
    table: { createTable: create }
  } = apiUrls;

  const { data } = await apiCall<CreateTableRequest, CreateTableResponse>(
    create,
    HttpMethod.POST,
    payload
  );

  return data;
};
