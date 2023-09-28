import { useForm } from 'antd/es/form/Form';
import { Form, Input } from 'antd';
import { AntdDrawer } from 'components';
import { useUserStore } from 'stores';
import { useFillForm } from 'hooks';
import { useCreateTicket, useEditTicket, useGetTicket } from '../../hooks';
import { AddTicketFormProps, AddTicketFormType } from './AddTicketForm.type';
import { AddTicketFormInputs } from './AddTicketForm.enum';

export const AddTicketForm = ({
  isSidebarVisible,
  onCloseSidebar,
  columnId,
  ticketId
}: AddTicketFormProps) => {
  const isEdit = Boolean(ticketId);
  const [form] = useForm();

  const { id } = useUserStore();
  const { data: ticketData } = useGetTicket(ticketId);
  const { mutateAsync: createTicket } = useCreateTicket();
  const { mutateAsync: editTicket } = useEditTicket();

  useFillForm(ticketData, form, isSidebarVisible, isEdit);

  const handleSubmit = (values: AddTicketFormType) => {
    if (isEdit) {
      editTicket({ ...values, id: ticketId });
    } else {
      createTicket({ ...values, column_id: columnId, user_id: id });
    }
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
        {/* <Form.Item name={AddTicketFormInputs.START}>
          <DatePicker placeholder='Select start time' />
        </Form.Item>
        <Form.Item name={AddTicketFormInputs.END}>
          <DatePicker placeholder='Select end time' />
        </Form.Item> */}
      </Form>
    </AntdDrawer>
  );
};
