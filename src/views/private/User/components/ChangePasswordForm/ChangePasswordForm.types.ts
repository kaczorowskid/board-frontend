import { ChangePasswordFormInputs } from './ChangePasswordForm.enum';

export interface ChangePasswordFormType {
  [ChangePasswordFormInputs.OLD_PASSWORD]: string;
  [ChangePasswordFormInputs.NEW_PASSWORD]: string;
  [ChangePasswordFormInputs.REPEAT_PASSWORD]?: string;
}
