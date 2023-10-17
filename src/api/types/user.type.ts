export interface RegisterUserRequest {
  email: string;
  password: string;
}

export interface RegisterUserResponse {
  id: string;
  email: string;
  is_active: boolean;
  first_name: string;
  last_name: string;
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
  first_name: string;
  last_name: string;
  password?: string;
  token?: string;
}

export type GetUserRequest = {
  id: string;
};

export interface GetUserResponse {
  id: string;
  email: string;
  is_active: boolean;
  first_name: string;
  last_name: string;
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

export type AuthorizeUserRequest = void;

export interface AuthorizeUserResponse {
  id: string;
  email: string;
  is_active: boolean;
  first_name: string;
  last_name: string;
}

export type UpdateUserRequest = {
  id: string;
  first_name: string;
  last_name: string;
};

export interface UpdateUserResponse {
  id: string;
  email: string;
  is_active: boolean;
  first_name: string;
  last_name: string;
}

export type UpdatePasswordRequest = {
  id: string;
  old_password: string;
  new_password: string;
};

export interface UpdatePasswordResponse {
  result: string;
}
