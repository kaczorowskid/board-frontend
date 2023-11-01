import { SelectProps } from 'antd';
import { InputsRule } from 'types';
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

export const inputsRule: InputsRule = {
  [AddTicketFormInputs.TITLE]: [
    {
      required: true,
      min: 3,
      max: 200
    }
  ],
  [AddTicketFormInputs.DESCRIPTION]: [
    {
      max: 500
    }
  ],
  [AddTicketFormInputs.PRIO]: [
    {
      required: true
    }
  ]
};
