import { CommonFormProps } from 'types';
import { CreateTicketRequest } from 'board-contracts';
import { AddTicketFormInputs } from './AddTicketForm.enum';

export interface AddTicketFormProps extends CommonFormProps {}

export interface AddTicketFormType {
  [AddTicketFormInputs.TITLE]: CreateTicketRequest['title'];
  [AddTicketFormInputs.DESCRIPTION]: CreateTicketRequest['description'];
  [AddTicketFormInputs.PRIO]: CreateTicketRequest['prio'];
}
