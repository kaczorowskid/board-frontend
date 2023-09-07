import { useForm } from 'antd/es/form/Form';
import { DatePicker, Form, Input } from 'antd';
import { AntdDrawer } from 'components';
import { AddTicketFormProps, AddTicketFormType } from './AddTicketForm.type';
import { AddTicketFormInputs } from './AddTicketForm.enum';
import { useCreateTicket } from './AddTicketForm.hook';

export const AddTicketForm = ({
  isSidebarVisible,
  onCloseSidebar,
  columnId
}: AddTicketFormProps) => {
  const [form] = useForm<AddTicketFormType>();
  const { mutateAsync: createTicket } = useCreateTicket();

  const handleSubmit = (values: AddTicketFormType) => {
    createTicket({ ...values, column_id: columnId });
    form.resetFields();
    onCloseSidebar();
  };

  return (
    <AntdDrawer
      open={isSidebarVisible}
      onClose={onCloseSidebar}
      formId='ticketForm'
      title='Add Ticket'
    >
      <Form id='ticketForm' form={form} onFinish={handleSubmit}>
        <Form.Item name={AddTicketFormInputs.TITLE}>
          <Input placeholder='Title' />
        </Form.Item>
        <Form.Item name={AddTicketFormInputs.DESCRIPTION}>
          <Input placeholder='Description' />
        </Form.Item>
        <Form.Item name={AddTicketFormInputs.PRIO}>
          <Input placeholder='Prio' />
        </Form.Item>
        <Form.Item name={AddTicketFormInputs.START}>
          <DatePicker placeholder='Select start time' />
        </Form.Item>
        <Form.Item name={AddTicketFormInputs.END}>
          <DatePicker placeholder='Select end time' />
        </Form.Item>
      </Form>
    </AntdDrawer>
  );
};
