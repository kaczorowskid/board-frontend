import { CommonFormProps } from 'types';
import { AddTicketFormInputs } from './AddTicketForm.enum';

export interface AddTicketFormProps extends CommonFormProps {}

export interface AddTicketFormType {
  [AddTicketFormInputs.TITLE]: string;
  [AddTicketFormInputs.DESCRIPTION]: string;
  [AddTicketFormInputs.PRIO]: 'high' | 'medium' | 'low';
}
