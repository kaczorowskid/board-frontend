import { RegisterFormInputs } from './Register.enum';
import { RegisterForm } from './Register.type';

export const initValues: RegisterForm = {
  [RegisterFormInputs.EMAIL]: '',
  [RegisterFormInputs.PASSWORD]: '',
  [RegisterFormInputs.CONFIRM_PASSWORD]: ''
};
