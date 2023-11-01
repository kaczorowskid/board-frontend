import { CommonFormProps, InputsRule } from 'types';
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

export const inputsRule: InputsRule = {
  [CellFormInputs.NOTE]: [
    {
      required: true
    }
  ],
  [CellFormInputs.HOUR]: [
    {
      required: true
    }
  ]
};
