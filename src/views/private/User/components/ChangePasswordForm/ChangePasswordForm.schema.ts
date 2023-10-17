import { ChangePasswordFormInputs } from './ChangePasswordForm.enum';

export const initialValues = {
  [ChangePasswordFormInputs.OLD_PASSWORD]: '',
  [ChangePasswordFormInputs.NEW_PASSWORD]: ''
};

export const requiredFields = [
  ChangePasswordFormInputs.OLD_PASSWORD,
  ChangePasswordFormInputs.NEW_PASSWORD,
  ChangePasswordFormInputs.REPEAT_PASSWORD
];
