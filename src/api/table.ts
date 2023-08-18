import { HttpMethod, apiCall, apiUrls } from 'utils';
import {
  CreateTableRequest,
  CreateTableResponse,
  GetAllTablesRequest,
  GetAllTablesResponse,
  GetTablesWithPaginationRequest,
  GetTablesWithPaginationResponse
} from './types';

export const getAllTables = async (payload: GetAllTablesRequest): Promise<GetAllTablesResponse> => {
  const {
    table: { getAllTables: getTables }
  } = apiUrls;

  const { data } = await apiCall<GetAllTablesRequest, GetAllTablesResponse>(
    getTables(payload.user_id),
    HttpMethod.GET,
    payload
  );

  return data;
};

export const getTablesWithPagination = async (
  payload: GetTablesWithPaginationRequest
): Promise<GetTablesWithPaginationResponse> => {
  const {
    table: { getTablesWithPagination: getTables }
  } = apiUrls;

  const { data } = await apiCall<GetTablesWithPaginationRequest, GetTablesWithPaginationResponse>(
    getTables,
    HttpMethod.GET,
    payload
  );

  return data;
};

export const createTable = async (payload: CreateTableRequest): Promise<CreateTableResponse> => {
  const {
    table: { createTable: create }
  } = apiUrls;

  const { data } = await apiCall<CreateTableRequest, CreateTableResponse>(create, HttpMethod.POST, payload);

  return data;
};
