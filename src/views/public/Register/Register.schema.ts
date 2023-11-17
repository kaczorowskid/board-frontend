import { InputsRule } from 'types';
import { RegisterFormInputs } from './Register.enum';
import { RegisterForm } from './Register.type';

export const initValues: RegisterForm = {
  [RegisterFormInputs.FIRST_NAME]: '',
  [RegisterFormInputs.LAST_NAME]: '',
  [RegisterFormInputs.EMAIL]: '',
  [RegisterFormInputs.PASSWORD]: '',
  [RegisterFormInputs.CONFIRM_PASSWORD]: ''
};

export const inputsRule: InputsRule = {
  [RegisterFormInputs.FIRST_NAME]: [
    {
      required: true,
      min: 3,
      max: 20
    }
  ],
  [RegisterFormInputs.LAST_NAME]: [
    {
      required: true,
      min: 3,
      max: 20
    }
  ],
  [RegisterFormInputs.EMAIL]: [
    {
      required: true,
      type: 'email'
    }
  ],
  [RegisterFormInputs.PASSWORD]: [
    {
      required: true,
      min: 3,
      max: 40
    }
  ],
  [RegisterFormInputs.CONFIRM_PASSWORD]: [
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (value !== getFieldValue(RegisterFormInputs.PASSWORD)) {
          return Promise.reject(new Error('Incorrect password'));
        }

        return Promise.resolve();
      }
    })
  ]
};
