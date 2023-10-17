import { UserDetailsFormInputs } from './UserDetailsForm.enum';

export interface UserDetailsFormType {
  [UserDetailsFormInputs.FIRST_NAME]: string;
  [UserDetailsFormInputs.LAST_NAME]: string;
}
