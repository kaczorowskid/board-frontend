import { UserDetailsFormInputs } from './UserDetailsForm.enum';

export const initialValues = {
  [UserDetailsFormInputs.FIRST_NAME]: '',
  [UserDetailsFormInputs.LAST_NAME]: ''
};

export const requiredFields = [
  UserDetailsFormInputs.FIRST_NAME,
  UserDetailsFormInputs.LAST_NAME
];
