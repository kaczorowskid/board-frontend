import { useForm } from 'antd/es/form/Form';
import { Divider, Form, Input, Select } from 'antd';
import { AntdModal } from 'components';
import { useUserStore } from 'stores';
import { useFillForm } from 'hooks';
import ReactQuill from 'react-quill';
import { PicRightOutlined } from '@ant-design/icons';
import {
  useCommentItems,
  useCreateTicket,
  useEditTicket,
  useGetTicket,
  useRemoveComment
} from '../../hooks';
import { AddTicketFormProps, AddTicketFormType } from './AddTicketForm.type';
import { AddTicketFormInputs } from './AddTicketForm.enum';
import {
  initialValues,
  inputsLabel,
  inputsPlaceholder,
  prioOptions
} from './AddTicketForm.schema';
import { Comments, CommentsForm } from './components';
import { CommentsContainer } from './AddTicketForm.styled';

export const AddTicketForm = ({
  isSidebarVisible,
  onCloseSidebar,
  columnId,
  ticketId
}: AddTicketFormProps) => {
  const isEdit = Boolean(ticketId);
  const [form] = useForm();

  const { id: userId } = useUserStore();
  const { data: ticketData } = useGetTicket(ticketId);
  const { mutateAsync: createTicket } = useCreateTicket();
  const { mutateAsync: editTicket } = useEditTicket();

  const { mutateAsync: removeComment } = useRemoveComment();

  const commentItems = useCommentItems(removeComment);

  useFillForm(ticketData, form, isSidebarVisible, isEdit);

  const handleSubmit = (values: AddTicketFormType) => {
    const mappedValues = { ...values };
    if (mappedValues.description.trim() === '<p><br></p>') {
      mappedValues.description = '';
    }

    if (isEdit) {
      editTicket({ ...mappedValues, id: ticketId });
    } else {
      createTicket({ ...mappedValues, column_id: columnId, user_id: userId });
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
          <ReactQuill
            theme='snow'
            style={{ height: '200px', marginBottom: '40px' }}
          />
        </Form.Item>

        <Form.Item
          name={AddTicketFormInputs.PRIO}
          label={inputsLabel[AddTicketFormInputs.PRIO]}
        >
          <Select
            options={prioOptions}
            placeholder={inputsPlaceholder[AddTicketFormInputs.PRIO]}
          />
        </Form.Item>
      </Form>
      <Divider />
      <h2>Comments</h2>
      <CommentsContainer>
        <CommentsForm ticketId={ticketId} userId={userId} />
        <Comments
          data={ticketData?.comments}
          commentsDropdownItems={commentItems}
          commentsDropdownIcon={<PicRightOutlined />}
        />
      </CommentsContainer>
    </AntdModal>
  );
};
