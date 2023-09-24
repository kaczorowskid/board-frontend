import { CommonFormProps } from 'types';
import { Dayjs } from 'dayjs';
import { CellFormInputs } from './CellForm.enum';

export interface CellFormProps extends CommonFormProps {
  userId: string;
  date: string;
}

export interface CellFormType {
  [CellFormInputs.NOTE]: string;
  [CellFormInputs.HOUR]: Dayjs;
}
