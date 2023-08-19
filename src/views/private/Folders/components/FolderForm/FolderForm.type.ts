import { CommonFormProps } from 'types';
import { FolderFormInputs } from './FolderForm.enum';

export interface FolderFormProps extends CommonFormProps {}

export interface FolderFormType {
  [FolderFormInputs.NAME]: string;
  [FolderFormInputs.DESCRIPTION]: string;
}
