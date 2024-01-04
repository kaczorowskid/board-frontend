import { UpdatePasswordRequest } from 'board-contracts';
import { ChangePasswordFormInputs } from './ChangePasswordForm.enum';

export interface ChangePasswordFormType {
  [ChangePasswordFormInputs.OLD_PASSWORD]: UpdatePasswordRequest['old_password'];
  [ChangePasswordFormInputs.NEW_PASSWORD]: UpdatePasswordRequest['new_password'];
  [ChangePasswordFormInputs.REPEAT_PASSWORD]?: string;
}
