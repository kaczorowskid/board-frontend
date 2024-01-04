import { CommonFormProps } from 'types';
import { CreateNoteRequest } from 'board-contracts';
import { CellFormInputs } from './CellForm.enum';

export interface CellFormProps extends CommonFormProps {
  userId: string;
  date: string;
}

export interface CellFormType {
  [CellFormInputs.NOTE]: CreateNoteRequest['note'];
}
