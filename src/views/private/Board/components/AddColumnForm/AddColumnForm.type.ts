import { CommonFormProps } from 'types';
import { AddColumnFormInputs } from './AddColumnForm.enum';

export interface AddColumnFormProps extends CommonFormProps {
  boardId: string;
  columnId: string;
}

export interface AddColumnFormType {
  [AddColumnFormInputs.TITLE]: string;
}
