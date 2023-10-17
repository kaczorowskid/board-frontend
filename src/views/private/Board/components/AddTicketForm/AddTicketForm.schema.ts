import { SelectProps } from 'antd';
import { AddTicketFormInputs } from './AddTicketForm.enum';

export const initialValues = {
  [AddTicketFormInputs.TITLE]: '',
  [AddTicketFormInputs.DESCRIPTION]: '',
  [AddTicketFormInputs.PRIO]: ''
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
