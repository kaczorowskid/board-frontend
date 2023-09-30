import { BoardsFormInputs } from './BoardForm.enum';

export const initialValues = {
  [BoardsFormInputs.TITLE]: '',
  [BoardsFormInputs.DESCRIPTION]: ''
};

export const inputsLabel = {
  [BoardsFormInputs.TITLE]: 'Title',
  [BoardsFormInputs.DESCRIPTION]: 'Description'
};

export const inputsPlaceholder = {
  [BoardsFormInputs.TITLE]: 'Title',
  [BoardsFormInputs.DESCRIPTION]: 'Description'
};
