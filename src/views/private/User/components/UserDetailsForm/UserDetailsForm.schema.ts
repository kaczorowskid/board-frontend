import { InputsRule } from 'types';
import { UserDetailsFormInputs } from './UserDetailsForm.enum';

export const initialValues = {
  [UserDetailsFormInputs.FIRST_NAME]: '',
  [UserDetailsFormInputs.LAST_NAME]: ''
};

export const requiredFields = [
  UserDetailsFormInputs.FIRST_NAME,
  UserDetailsFormInputs.LAST_NAME
];

export const inputsRule: InputsRule = {
  [UserDetailsFormInputs.FIRST_NAME]: [
    {
      required: true,
      min: 3,
      max: 25
    }
  ],
  [UserDetailsFormInputs.LAST_NAME]: [
    {
      required: true,
      min: 3,
      max: 25
    }
  ]
};
