import { HttpMethod, apiCall, apiUrls } from 'utils';
import {
  CreateBoardRequest,
  CreateBoardResponse,
  CreateColumnRequest,
  CreateColumnResponse,
  CreateTicketRequest,
  CreateTicketResponse,
  GetBoardRequest,
  GetBoardResponse,
  GetBoardsWithPaginationRequest,
  GetBoardsWithPaginationResponse,
  RemoveColumnRequest,
  RemoveColumnResponse,
  UpdateBoardRequest,
  UpdateBoardResponse
} from './types';

export const getBoard = async (
  payload: GetBoardRequest
): Promise<GetBoardResponse> => {
  const {
    board: { getBoard: get }
  } = apiUrls;

  const { data } = await apiCall<GetBoardRequest, GetBoardResponse>(
    get(payload.id),
    HttpMethod.GET,
    payload
  );

  return data;
};

export const updateBoard = async (
  payload: UpdateBoardRequest
): Promise<UpdateBoardResponse> => {
  const {
    board: { editBoard: edit }
  } = apiUrls;

  const { data } = await apiCall<UpdateBoardRequest, UpdateBoardResponse>(
    edit(payload.id),
    HttpMethod.PATCH,
    payload
  );

  return data;
};

export const createColumn = async (
  payload: CreateColumnRequest
): Promise<CreateColumnResponse> => {
  const {
    board: { createColumn: create }
  } = apiUrls;

  const { data } = await apiCall<CreateColumnRequest, CreateColumnResponse>(
    create,
    HttpMethod.POST,
    payload
  );

  return data;
};

export const removeColumn = async (
  payload: RemoveColumnRequest
): Promise<RemoveColumnResponse> => {
  const {
    board: { removeColumn: remove }
  } = apiUrls;

  const { data } = await apiCall<RemoveColumnRequest, RemoveColumnResponse>(
    remove(payload.id),
    HttpMethod.DELETE
  );

  return data;
};

export const createTicket = async (
  payload: CreateTicketRequest
): Promise<CreateTicketResponse> => {
  const {
    board: { createTicket: create }
  } = apiUrls;

  const { data } = await apiCall<CreateTicketRequest, CreateTicketResponse>(
    create,
    HttpMethod.POST,
    payload
  );

  return data;
};

export const getBoardsWithPagination = async (
  payload: GetBoardsWithPaginationRequest
): Promise<GetBoardsWithPaginationResponse> => {
  const {
    board: { getBoardsWithPagination: getBoards }
  } = apiUrls;

  const { data } = await apiCall<
    GetBoardsWithPaginationRequest,
    GetBoardsWithPaginationResponse
  >(getBoards, HttpMethod.GET, payload);

  return data;
};

export const createBoard = async (
  payload: CreateBoardRequest
): Promise<CreateBoardResponse> => {
  const {
    board: { createBoard: create }
  } = apiUrls;

  const { data } = await apiCall<CreateBoardRequest, CreateBoardResponse>(
    create,
    HttpMethod.POST,
    payload
  );

  return data;
};
