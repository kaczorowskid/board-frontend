import { InputsRule } from 'types';
import { SetNewPasswordFormInputs } from './SetNewPassword.enum';
import { SetNewPasswordForm } from './SetNewPassword.type';

export const initValues: SetNewPasswordForm = {
  [SetNewPasswordFormInputs.PASSWORD]: '',
  [SetNewPasswordFormInputs.OLD_PASSWORD]: ''
};

export const inputsRule: InputsRule = {
  [SetNewPasswordFormInputs.PASSWORD]: [
    {
      required: true,
      min: 3,
      max: 40
    }
  ],
  [SetNewPasswordFormInputs.OLD_PASSWORD]: [
    {
      required: true,
      min: 3,
      max: 40
    }
  ]
};
