import { useForm } from 'antd/es/form/Form';
import { Divider, Form, Input, Select } from 'antd';
import { AntdDrawer } from 'components';
import { useUserStore } from 'stores';
import { useCustomSearchParams, useFillForm } from 'hooks';
import ReactQuill from 'react-quill';
import { PicRightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import {
  useCommentItems,
  useCreateTicket,
  useEditTicket,
  useGetTicket,
  useRemoveComment
} from '../../hooks';
import { SearchParams } from '../../Board.type';
import { AddTicketFormProps, AddTicketFormType } from './AddTicketForm.type';
import { AddTicketFormInputs } from './AddTicketForm.enum';
import { initialValues, inputsRule, prioOptions } from './AddTicketForm.schema';
import { Branch, Comments, CommentsForm } from './components';
import {
  CommentsContainer,
  ItemsContainer,
  CommentsTitle
} from './AddTicketForm.styled';

export const AddTicketForm = ({
  isSidebarVisible,
  onCloseSidebar
}: AddTicketFormProps) => {
  const {
    params: { columnId, ticketId }
  } = useCustomSearchParams<SearchParams>();

  const isEdit = Boolean(ticketId);
  const [form] = useForm();
  const { t } = useTranslation();
  const { id: userId } = useUserStore();
  const { data: ticketData } = useGetTicket(ticketId as string);
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
      editTicket({ ...mappedValues, id: ticketId as string });
    } else {
      createTicket({
        ...mappedValues,
        column_id: columnId as string,
        user_id: userId
      });
    }
    form.resetFields();
    onCloseSidebar();
  };

  return (
    <AntdDrawer
      open={isSidebarVisible}
      onClose={onCloseSidebar}
      formId='ticketForm'
      title={t('private.board.add-ticket')}
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
          label={t('private.board.title')}
          rules={inputsRule[AddTicketFormInputs.TITLE]}
        >
          <Input placeholder={t('private.board.title')} />
        </Form.Item>
        <Form.Item
          name={AddTicketFormInputs.DESCRIPTION}
          label={t('private.board.description')}
          rules={inputsRule[AddTicketFormInputs.DESCRIPTION]}
        >
          <ReactQuill
            theme='snow'
            style={{ height: '200px', marginBottom: '40px' }}
          />
        </Form.Item>

        <Form.Item
          name={AddTicketFormInputs.PRIO}
          label={t('private.board.priority')}
          rules={inputsRule[AddTicketFormInputs.PRIO]}
        >
          <Select
            options={prioOptions}
            placeholder={t('private.board.priority')}
          />
        </Form.Item>
      </Form>

      <ItemsContainer>
        <Branch data={ticketData} />
      </ItemsContainer>
      <Divider />
      <CommentsTitle>{t('private.board.comments')}</CommentsTitle>
      <CommentsContainer>
        <CommentsForm ticketId={ticketId as string} userId={userId} />
        <Comments
          data={ticketData?.comments}
          commentsDropdownItems={commentItems}
          commentsDropdownIcon={<PicRightOutlined />}
        />
      </CommentsContainer>
    </AntdDrawer>
  );
};
