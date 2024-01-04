import { UpdateUserRequest } from 'board-contracts';
import { UserDetailsFormInputs } from './UserDetailsForm.enum';

export interface UserDetailsFormType {
  [UserDetailsFormInputs.FIRST_NAME]: UpdateUserRequest['first_name'];
  [UserDetailsFormInputs.LAST_NAME]: UpdateUserRequest['last_name'];
}
