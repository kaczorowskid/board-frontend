import { InputsRule } from 'types';
import { BoardsFormInputs } from './BoardForm.enum';

export const initialValues = {
  [BoardsFormInputs.TITLE]: '',
  [BoardsFormInputs.DESCRIPTION]: ''
};

export const inputsRule: InputsRule = {
  [BoardsFormInputs.TITLE]: [
    {
      required: true,
      min: 3,
      max: 200
    }
  ],
  [BoardsFormInputs.DESCRIPTION]: [
    {
      max: 500
    }
  ]
};
