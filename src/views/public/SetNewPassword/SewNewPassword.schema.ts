import { SetNewPasswordFormInputs } from './SetNewPassword.enum';
import { SetNewPasswordForm } from './SetNewPassword.type';

export const initValues: SetNewPasswordForm = {
  [SetNewPasswordFormInputs.PASSWORD]: '',
  [SetNewPasswordFormInputs.OLD_PASSWORD]: ''
};
