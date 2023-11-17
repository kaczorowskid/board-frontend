import { RegisterFormInputs } from './Register.enum';

export interface RegisterForm {
  [RegisterFormInputs.FIRST_NAME]: string;
  [RegisterFormInputs.LAST_NAME]: string;
  [RegisterFormInputs.EMAIL]: string;
  [RegisterFormInputs.PASSWORD]: string;
  [RegisterFormInputs.CONFIRM_PASSWORD]?: string;
}
