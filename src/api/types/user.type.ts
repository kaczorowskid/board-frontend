export interface RegisterUserRequest {
  email: string;
  password: string;
}

export interface RegisterUserResponse {
  id: string;
  email: string;
  is_active: boolean;
  name: string;
  password?: string;
}

export interface LoginUserRequest {
  email: string;
  password: string;
}

export interface LoginUserResponse {
  id: string;
  email: string;
  is_active: boolean;
  name: string;
  password?: string;
  token?: string;
}

export interface GetUserResponse {
  id: string;
  email: string;
  is_active: boolean;
  name: string;
}

export interface ResetPasswordUserRequest {
  email: string;
}

export interface ResetPasswordUserResponse {
  data: string;
}

export interface SetNewPasswordUserRequest {
  token: string | null;
  password: string;
  oldPassword: string;
}

export interface SetNewPasswordUserResponse {
  data: string;
}

export interface ConfirmAccountUserRequest {
  token: string | null;
}

export interface ConfirmAccountUserResponse {
  data: string;
}
