import { LoginFormInputs } from './Login.enum';
import { LoginForm } from './Login.type';

export const initValues: LoginForm = {
  [LoginFormInputs.EMAIL]: '',
  [LoginFormInputs.PASSWORD]: ''
};
