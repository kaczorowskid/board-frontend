import { InputsRule } from 'types';
import { CellFormInputs } from './CellForm.enum';

export const initialValues = {
  [CellFormInputs.NOTE]: ''
};

export const inputsRule: InputsRule = {
  [CellFormInputs.NOTE]: [
    {
      required: true
    }
  ]
};
