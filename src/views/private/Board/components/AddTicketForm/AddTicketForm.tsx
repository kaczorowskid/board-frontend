import { useForm } from 'antd/es/form/Form';
import { Form, Input } from 'antd';
import { AntdModal } from 'components';
import { useUserStore } from 'stores';
import { useFillForm } from 'hooks';
import { useCreateTicket, useEditTicket, useGetTicket } from '../../hooks';
import { AddTicketFormProps, AddTicketFormType } from './AddTicketForm.type';
import { AddTicketFormInputs } from './AddTicketForm.enum';
import {
  initialValues,
  inputsLabel,
  inputsPlaceholder
} from './AddTicketForm.schema';

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
    <AntdModal
      open={isSidebarVisible}
      onClose={onCloseSidebar}
      formId='ticketForm'
      title='Add Ticket'
    >
      <Form
        id='ticketForm'
        layout='vertical'
        form={form}
        onFinish={handleSubmit}
        initialValues={initialValues}
      >
        <Form.Item
          name={AddTicketFormInputs.TITLE}
          label={inputsLabel[AddTicketFormInputs.TITLE]}
        >
          <Input placeholder={inputsPlaceholder[AddTicketFormInputs.TITLE]} />
        </Form.Item>
        <Form.Item
          name={AddTicketFormInputs.DESCRIPTION}
          label={inputsLabel[AddTicketFormInputs.DESCRIPTION]}
        >
          <Input
            placeholder={inputsPlaceholder[AddTicketFormInputs.DESCRIPTION]}
          />
        </Form.Item>
        <Form.Item
          name={AddTicketFormInputs.PRIO}
          label={inputsLabel[AddTicketFormInputs.PRIO]}
        >
          <Input placeholder={inputsPlaceholder[AddTicketFormInputs.PRIO]} />
        </Form.Item>
      </Form>
    </AntdModal>
  );
};
