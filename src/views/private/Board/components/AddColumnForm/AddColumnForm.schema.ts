import { InputsRule } from 'types';
import { AddColumnFormInputs } from './AddColumnForm.enum';

export const initialValues = {
  [AddColumnFormInputs.TITLE]: ''
};

export const inputRules: InputsRule = {
  [AddColumnFormInputs.TITLE]: [
    {
      required: true,
      min: 3,
      max: 40
    }
  ]
};
