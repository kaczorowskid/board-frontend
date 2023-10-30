import { CommonFormProps } from 'types';
import { AddColumnFormInputs } from './AddColumnForm.enum';

export interface AddColumnFormProps extends CommonFormProps {}

export interface AddColumnFormType {
  [AddColumnFormInputs.TITLE]: string;
}
