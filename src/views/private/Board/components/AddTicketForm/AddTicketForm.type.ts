import { CommonFormProps } from 'types';
import { AddTicketFormInputs } from './AddTicketForm.enum';

export interface AddTicketFormProps extends CommonFormProps {
  columnId: string;
  ticketId: string;
}

export interface AddTicketFormType {
  [AddTicketFormInputs.TITLE]: string;
  [AddTicketFormInputs.DESCRIPTION]: string;
  [AddTicketFormInputs.PRIO]: string;
  [AddTicketFormInputs.START]: string;
  [AddTicketFormInputs.END]: string;
}
