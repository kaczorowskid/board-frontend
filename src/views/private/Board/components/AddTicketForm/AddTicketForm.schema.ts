import { SelectProps } from 'antd';
import { AddTicketFormInputs } from './AddTicketForm.enum';

export const initialValues = {
  [AddTicketFormInputs.TITLE]: '',
  [AddTicketFormInputs.DESCRIPTION]: '',
  [AddTicketFormInputs.PRIO]: ''
};

export const inputsLabel = {
  [AddTicketFormInputs.TITLE]: 'Title',
  [AddTicketFormInputs.DESCRIPTION]: 'Description',
  [AddTicketFormInputs.PRIO]: 'Prio'
};

export const inputsPlaceholder = {
  [AddTicketFormInputs.TITLE]: 'Title',
  [AddTicketFormInputs.DESCRIPTION]: 'Description',
  [AddTicketFormInputs.PRIO]: 'Prio'
};

export const prioOptions: SelectProps['options'] = [
  {
    label: 'High',
    value: 'high'
  },
  {
    label: 'Medium',
    value: 'medium'
  },
  {
    label: 'Low',
    value: 'low'
  }
];
