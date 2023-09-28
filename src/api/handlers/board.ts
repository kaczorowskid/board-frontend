import { HttpMethod, apiCall } from 'api/apiCall';
import { apiUrls } from 'api/apiUrls';
import {
  CreateBoardRequest,
  CreateBoardResponse,
  CreateColumnRequest,
  CreateColumnResponse,
  CreateTicketRequest,
  CreateTicketResponse,
  EditBoardRequest,
  EditBoardResponse,
  EditColumnRequest,
  EditColumnResponse,
  EditTicketRequest,
  EditTicketResponse,
  GetBoardRequest,
  GetBoardResponse,
  GetBoardsWithPaginationRequest,
  GetBoardsWithPaginationResponse,
  GetColumnRequest,
  GetColumnResponse,
  GetTicketRequest,
  GetTicketResponse,
  RemoveBoardRequest,
  RemoveBoardResponse,
  RemoveColumnRequest,
  RemoveColumnResponse,
  RemoveTicketRequest,
  RemoveTicketResponse,
  UpdateBoardRequest,
  UpdateBoardResponse
} from 'api/types';

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
    board: { updateBoard: update }
  } = apiUrls;

  const { data } = await apiCall<UpdateBoardRequest, UpdateBoardResponse>(
    update(payload.id),
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

export const editBoard = async (
  payload: EditBoardRequest
): Promise<EditBoardResponse> => {
  const {
    board: { editBoard: edit }
  } = apiUrls;

  const { data } = await apiCall<EditBoardRequest, EditBoardResponse>(
    edit(payload.id),
    HttpMethod.PATCH,
    payload
  );

  return data;
};

export const removeBoard = async (
  payload: RemoveBoardRequest
): Promise<RemoveBoardResponse> => {
  const {
    board: { removeBoard: remove }
  } = apiUrls;

  const { data } = await apiCall<RemoveBoardRequest, RemoveBoardResponse>(
    remove(payload.id),
    HttpMethod.DELETE,
    payload
  );

  return data;
};

export const editTicket = async (
  payload: EditTicketRequest
): Promise<EditTicketResponse> => {
  const {
    board: { editTicket: edit }
  } = apiUrls;

  const { data } = await apiCall<EditTicketRequest, EditTicketResponse>(
    edit(payload.id),
    HttpMethod.PATCH,
    payload
  );

  return data;
};

export const removeTicket = async (
  payload: RemoveTicketRequest
): Promise<RemoveTicketResponse> => {
  const {
    board: { removeTicket: remove }
  } = apiUrls;

  const { data } = await apiCall<RemoveTicketRequest, RemoveTicketResponse>(
    remove(payload.id),
    HttpMethod.DELETE,
    payload
  );

  return data;
};

export const getTicket = async (
  payload: GetTicketRequest
): Promise<GetTicketResponse> => {
  const {
    board: { getTicket: get }
  } = apiUrls;

  const { data } = await apiCall<GetTicketRequest, GetTicketResponse>(
    get(payload.id),
    HttpMethod.GET,
    payload
  );

  return data;
};

export const getColumn = async (
  payload: GetColumnRequest
): Promise<GetColumnResponse> => {
  const {
    board: { getColumn: get }
  } = apiUrls;

  const { data } = await apiCall<GetColumnRequest, GetColumnResponse>(
    get(payload.id),
    HttpMethod.GET,
    payload
  );

  return data;
};

export const editColumn = async (
  payload: EditColumnRequest
): Promise<EditColumnResponse> => {
  const {
    board: { editColumn: edit }
  } = apiUrls;

  const { data } = await apiCall<EditColumnRequest, EditColumnResponse>(
    edit(payload.id),
    HttpMethod.PATCH,
    payload
  );

  return data;
};
