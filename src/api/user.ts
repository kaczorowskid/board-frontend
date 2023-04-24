import { HttpMethod, apiCall, apiUrls } from 'utils';
import {
  ConfirmAccountUserRequest,
  ConfirmAccountUserResponse,
  LoginUserRequest,
  LoginUserResponse,
  RegisterUserRequest,
  RegisterUserResponse,
  ResetPasswordUserRequest,
  ResetPasswordUserResponse,
  SetNewPasswordUserRequest,
  SetNewPasswordUserResponse
} from './types';

export const registerUser = async (payload: RegisterUserRequest): Promise<RegisterUserResponse> => {
  const {
    user: { register }
  } = apiUrls;

  const { data } = await apiCall<RegisterUserRequest, RegisterUserResponse>(register, HttpMethod.POST, payload);

  return data;
};

export const loginUser = async (payload: LoginUserRequest): Promise<LoginUserResponse> => {
  const {
    user: { login }
  } = apiUrls;

  const { data } = await apiCall<LoginUserRequest, LoginUserResponse>(login, HttpMethod.POST, payload);

  return data;
};

export const resetPasswordUser = async (payload: ResetPasswordUserRequest): Promise<ResetPasswordUserResponse> => {
  const {
    user: { resetPassword }
  } = apiUrls;

  const { data } = await apiCall<ResetPasswordUserRequest, ResetPasswordUserResponse>(
    resetPassword,
    HttpMethod.POST,
    payload
  );

  return data;
};

export const setNewPasswordUser = async (payload: SetNewPasswordUserRequest): Promise<SetNewPasswordUserResponse> => {
  const {
    user: { setNewPassword }
  } = apiUrls;

  const { data } = await apiCall<SetNewPasswordUserRequest, SetNewPasswordUserResponse>(
    setNewPassword,
    HttpMethod.POST,
    payload
  );

  return data;
};

export const confirmAccountUser = async (payload: ConfirmAccountUserRequest): Promise<ConfirmAccountUserResponse> => {
  const {
    user: { confirmAccount }
  } = apiUrls;

  const { data } = await apiCall<ConfirmAccountUserRequest, ConfirmAccountUserResponse>(
    confirmAccount(payload.token),
    HttpMethod.GET,
    payload
  );

  return data;
};
