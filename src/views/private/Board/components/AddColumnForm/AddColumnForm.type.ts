import { CommonFormProps } from 'types';
import { CreateColumnRequest } from 'board-contracts';
import { AddColumnFormInputs } from './AddColumnForm.enum';

export interface AddColumnFormProps extends CommonFormProps {}

export interface AddColumnFormType {
  [AddColumnFormInputs.TITLE]: CreateColumnRequest['title'];
}
