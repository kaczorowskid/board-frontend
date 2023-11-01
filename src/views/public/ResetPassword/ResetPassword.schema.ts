import { InputsRule } from 'types';
import { ResetPasswordFormInputs } from './ResetPassword.enum';
import { ResetPasswordForm } from './ResetPassword.type';

export const initValues: ResetPasswordForm = {
  [ResetPasswordFormInputs.EMAIL]: ''
};

export const inputsRule: InputsRule = {
  [ResetPasswordFormInputs.EMAIL]: [
    {
      required: true,
      type: 'email'
    }
  ]
};
