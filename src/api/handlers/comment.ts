import { HttpMethod, apiCall } from 'api/apiCall';
import { apiUrls } from 'api/apiUrls';
import {
  CreateCommentRequest,
  CreateCommentResponse,
  RemoveCommentRequest,
  RemoveCommentResponse
} from 'contracts';

export const createComment = async (
  payload: CreateCommentRequest
): Promise<CreateCommentResponse> => {
  const {
    comment: { createComment: create }
  } = apiUrls;

  const { data } = await apiCall<CreateCommentRequest, CreateCommentResponse>(
    create,
    HttpMethod.POST,
    payload
  );

  return data;
};

export const removeComment = async (
  payload: RemoveCommentRequest
): Promise<RemoveCommentResponse> => {
  const {
    comment: { removeComment: remove }
  } = apiUrls;

  const { data } = await apiCall<RemoveCommentRequest, RemoveCommentResponse>(
    remove(payload.id),
    HttpMethod.DELETE,
    payload
  );

  return data;
};
