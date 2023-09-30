import { FolderFormInputs } from './FolderForm.enum';

export const initialValues = {
  [FolderFormInputs.NAME]: '',
  [FolderFormInputs.DESCRIPTION]: ''
};

export const inputsLabel = {
  [FolderFormInputs.NAME]: 'Name',
  [FolderFormInputs.DESCRIPTION]: 'Description'
};

export const inputsPlaceholder = {
  [FolderFormInputs.NAME]: 'Name',
  [FolderFormInputs.DESCRIPTION]: 'Description'
};
