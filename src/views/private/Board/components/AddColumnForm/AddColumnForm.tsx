import { useForm } from 'antd/es/form/Form';
import { Form, Input } from 'antd';
import { AntdDrawer } from 'components';
import { AddColumnFormProps, AddColumnFormType } from './AddColumnForm.type';
import { AddColumnFormInputs } from './AddColumnForm.enum';
import { useCreateColumn } from './AddFolderForm.hook';

export const AddColumnForm = ({
  isSidebarVisible,
  onCloseSidebar,
  boardId
}: AddColumnFormProps) => {
  const [form] = useForm<AddColumnFormType>();
  const { mutate: createColumn } = useCreateColumn();

  const handleSubmit = (values: AddColumnFormType) => {
    createColumn({ ...values, board_id: boardId });
    form.resetFields();
    onCloseSidebar();
  };

  return (
    <AntdDrawer
      open={isSidebarVisible}
      onClose={onCloseSidebar}
      formId='columnForm'
      title='Add Column'
    >
      <Form id='columnForm' form={form} onFinish={handleSubmit}>
        <Form.Item name={AddColumnFormInputs.TITLE}>
          <Input placeholder='Add new column' />
        </Form.Item>
      </Form>
    </AntdDrawer>
  );
};
