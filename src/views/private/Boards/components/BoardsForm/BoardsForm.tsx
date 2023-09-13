import { Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useUserStore } from 'stores';
import { AntdDrawer } from 'components';
import { useGetBoard } from 'views/private/Board/hooks';
import { useEffect } from 'react';
import { useCreateBoard, useEditBoard } from '../../hooks';
import { BoardFormType, BoardsFormProps } from './BoardsForm.type';
import { BoardsFormInputs } from './BoardForm.enum';

export const BoardsForm = ({
  id,
  isSidebarVisible,
  onCloseSidebar
}: BoardsFormProps) => {
  const isEdit = Boolean(id);
  const [form] = useForm();

  const { data: boardData } = useGetBoard(id as string);
  const { mutateAsync: createBoard } = useCreateBoard();
  const { mutateAsync: editBoard } = useEditBoard();
  const { id: userId } = useUserStore();

  useEffect(() => {
    if (!isEdit) {
      form.resetFields();
    } else {
      form.setFieldsValue(boardData);
    }
  }, [isSidebarVisible, boardData]);

  const handleSubmit = (values: BoardFormType) => {
    if (isEdit) {
      editBoard({ ...values, id });
    } else {
      createBoard({ ...values, user_id: userId });
    }
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
