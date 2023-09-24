import { CommonFormProps } from 'types';
import { BoardsFormInputs } from './BoardForm.enum';

export interface BoardsFormProps extends CommonFormProps {
  id: string;
}

export interface BoardFormType {
  [BoardsFormInputs.TITLE]: string;
  [BoardsFormInputs.DESCRIPTION]: string;
}