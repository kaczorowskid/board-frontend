import { HttpMethod, apiCall } from 'api/apiCall';
import { apiUrls } from 'api/apiUrls';
import {
  CreateNoteRequest,
  CreateNoteResponse,
  EditNoteRequest,
  EditNoteResponse,
  GetCalendarRequest,
  GetCalendarResponse,
  GetNoteRequest,
  GetNoteResponse,
  GetNotesByDateRequest,
  GetNotesByDateResponse,
  RemoveNoteRequest,
  RemoveNoteResponse
} from 'contracts';

export const getCalendar = async (
  payload: GetCalendarRequest
): Promise<GetCalendarResponse[]> => {
  const {
    calendar: { getCalendar: get }
  } = apiUrls;

  const { data } = await apiCall<GetCalendarRequest, GetCalendarResponse[]>(
    get,
    HttpMethod.GET,
    payload
  );

  return data;
};

export const createNote = async (
  payload: CreateNoteRequest
): Promise<CreateNoteResponse> => {
  const {
    calendar: { createNote: create }
  } = apiUrls;

  const { data } = await apiCall<CreateNoteRequest, CreateNoteResponse>(
    create,
    HttpMethod.POST,
    payload
  );

  return data;
};

export const editNote = async (
  payload: EditNoteRequest
): Promise<EditNoteResponse> => {
  const {
    calendar: { editNote: edit }
  } = apiUrls;

  const { data } = await apiCall<EditNoteRequest, EditNoteResponse>(
    edit(payload.id),
    HttpMethod.PATCH,
    payload
  );

  return data;
};

export const getNotesByDate = async (
  payload: GetNotesByDateRequest
): Promise<GetNotesByDateResponse[]> => {
  const {
    calendar: { getNotesByDate: get }
  } = apiUrls;

  const { data } = await apiCall<
    GetNotesByDateRequest,
    GetNotesByDateResponse[]
  >(get, HttpMethod.GET, payload);

  return data;
};

export const getNote = async (
  payload: GetNoteRequest
): Promise<GetNoteResponse> => {
  const {
    calendar: { getNote: get }
  } = apiUrls;

  const { data } = await apiCall<GetNoteRequest, GetNoteResponse>(
    get(payload.id),
    HttpMethod.GET
  );

  return data;
};

export const removeNote = async (
  payload: RemoveNoteRequest
): Promise<RemoveNoteResponse> => {
  const {
    calendar: { removeNote: remove }
  } = apiUrls;

  const { data } = await apiCall<RemoveNoteRequest, RemoveNoteResponse>(
    remove(payload.id),
    HttpMethod.DELETE
  );

  return data;
};
