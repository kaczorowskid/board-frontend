import { HttpMethod, apiCall } from 'api/apiCall';
import { apiUrls } from 'api/apiUrls';
import {
  AuthorizeUserRequest,
  AuthorizeUserResponse,
  ConfirmAccountUserRequest,
  ConfirmAccountUserResponse,
  GetUserRequest,
  GetUserResponse,
  LoginUserRequest,
  LoginUserResponse,
  RegisterUserRequest,
  RegisterUserResponse,
  ResetPasswordUserRequest,
  ResetPasswordUserResponse,
  SetNewPasswordUserRequest,
  SetNewPasswordUserResponse,
  UpdatePasswordRequest,
  UpdatePasswordResponse,
  UpdateUserRequest,
  UpdateUserResponse
} from 'contracts/user.contracts';

export const registerUser = async (
  payload: RegisterUserRequest
): Promise<RegisterUserResponse> => {
  const {
    user: { register }
  } = apiUrls;

  const { data } = await apiCall<RegisterUserRequest, RegisterUserResponse>(
    register,
    HttpMethod.POST,
    payload
  );

  return data;
};

export const loginUser = async (
  payload: LoginUserRequest
): Promise<LoginUserResponse> => {
  const {
    user: { login }
  } = apiUrls;

  const { data } = await apiCall<LoginUserRequest, LoginUserResponse>(
    login,
    HttpMethod.POST,
    payload
  );

  return data;
};

export const getUser = async (
  payload: GetUserRequest
): Promise<GetUserResponse> => {
  const {
    user: { getUser: get }
  } = apiUrls;

  const { data } = await apiCall<GetUserRequest, GetUserResponse>(
    get(payload.id),
    HttpMethod.GET
  );

  return data;
};

export const resetPasswordUser = async (
  payload: ResetPasswordUserRequest
): Promise<ResetPasswordUserResponse> => {
  const {
    user: { resetPassword }
  } = apiUrls;

  const { data } = await apiCall<
    ResetPasswordUserRequest,
    ResetPasswordUserResponse
  >(resetPassword, HttpMethod.POST, payload);

  return data;
};

export const setNewPasswordUser = async (
  payload: SetNewPasswordUserRequest
): Promise<SetNewPasswordUserResponse> => {
  const {
    user: { setNewPassword }
  } = apiUrls;

  const { data } = await apiCall<
    SetNewPasswordUserRequest,
    SetNewPasswordUserResponse
  >(setNewPassword, HttpMethod.POST, payload);

  return data;
};

export const confirmAccountUser = async (
  payload: ConfirmAccountUserRequest
): Promise<ConfirmAccountUserResponse> => {
  const {
    user: { confirmAccount }
  } = apiUrls;

  const { data } = await apiCall<
    ConfirmAccountUserRequest,
    ConfirmAccountUserResponse
  >(confirmAccount(payload.token), HttpMethod.GET, payload);

  return data;
};

export const authorizeUser = async (): Promise<AuthorizeUserResponse> => {
  const {
    user: { authorize }
  } = apiUrls;

  const { data } = await apiCall<AuthorizeUserRequest, AuthorizeUserResponse>(
    authorize,
    HttpMethod.GET
  );

  return data;
};

export const logout = async (): Promise<unknown> => {
  const {
    user: { logout }
  } = apiUrls;

  const { data } = await apiCall<unknown, unknown>(logout, HttpMethod.GET);

  return data;
};

export const updateUser = async (
  payload: UpdateUserRequest
): Promise<UpdateUserResponse> => {
  const {
    user: { updateUser: update }
  } = apiUrls;

  const { data } = await apiCall<UpdateUserRequest, UpdateUserResponse>(
    update(payload.id),
    HttpMethod.PATCH,
    payload
  );

  return data;
};

export const updatePassword = async (
  payload: UpdatePasswordRequest
): Promise<UpdatePasswordResponse> => {
  const {
    user: { updatePassword: update }
  } = apiUrls;

  const { data } = await apiCall<UpdatePasswordRequest, UpdatePasswordResponse>(
    update(payload.id),
    HttpMethod.PATCH,
    payload
  );

  return data;
};
