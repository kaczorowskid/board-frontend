import { InputsRule } from 'types';
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

export const inputsRule: InputsRule = {
  [ChangePasswordFormInputs.OLD_PASSWORD]: [
    {
      required: true,
      min: 3,
      max: 40
    }
  ],
  [ChangePasswordFormInputs.NEW_PASSWORD]: [
    {
      required: true,
      min: 3,
      max: 40
    }
  ],
  [ChangePasswordFormInputs.REPEAT_PASSWORD]: [
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (value !== getFieldValue(ChangePasswordFormInputs.NEW_PASSWORD)) {
          return Promise.reject(new Error('Incorrect password'));
        }

        return Promise.resolve();
      }
    })
  ]
};
