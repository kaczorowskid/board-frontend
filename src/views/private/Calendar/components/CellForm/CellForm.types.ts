import { CommonFormProps, InputsRule } from 'types';
import { CellFormInputs } from './CellForm.enum';

export interface CellFormProps extends CommonFormProps {
  userId: string;
  date: string;
}

export interface CellFormType {
  [CellFormInputs.NOTE]: string;
}

export const inputsRule: InputsRule = {
  [CellFormInputs.NOTE]: [
    {
      required: true
    }
  ]
};
