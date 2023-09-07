import { Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useUserStore } from 'stores';
import { AntdDrawer } from 'components';
import { useCreate } from '../../hooks';
import { BoardFormType, BoardsFormProps } from './BoardsForm.type';
import { BoardsFormInputs } from './BoardForm.enum';

export const BoardsForm = ({
  isSidebarVisible,
  onCloseSidebar
}: BoardsFormProps) => {
  const [form] = useForm<BoardFormType>();

  const { mutateAsync: createBoard } = useCreate();
  const { id } = useUserStore();

  const handleSubmit = (values: BoardFormType) => {
    createBoard({ ...values, user_id: id });
    form.resetFields();
    onCloseSidebar();
  };

  return (
    <AntdDrawer
      open={isSidebarVisible}
      onClose={onCloseSidebar}
      formId='form'
      title='Add board'
    >
      <Form id='form' form={form} onFinish={handleSubmit}>
        <Form.Item name={BoardsFormInputs.TITLE}>
          <Input placeholder='title' />
        </Form.Item>
        <Form.Item name={BoardsFormInputs.DESCRIPTION}>
          <Input placeholder='description' />
        </Form.Item>
      </Form>
    </AntdDrawer>
  );
};
