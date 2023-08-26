import { Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useUserStore } from 'stores';
import { AntdDrawer } from 'components';
import { useCreate } from '../../hooks';
import { TablesFormProps } from './TablesForm.type';

export const TablesForm = ({
  isSidebarVisible,
  onCloseSidebar,
  onSave
}: TablesFormProps) => {
  const [form] = useForm();

  const { mutateAsync: createTable } = useCreate();
  const { id } = useUserStore();

  const handleSubmit = (values: any) => {
    createTable({ ...values, user_id: id });
  };

  return (
    <AntdDrawer
      open={isSidebarVisible}
      onClose={onCloseSidebar}
      onSumbit={onSave}
      title='Add table'
    >
      <Form id='form' form={form} onFinish={handleSubmit}>
        <Form.Item name='name'>
          <Input placeholder='name' />
        </Form.Item>
        <Form.Item name='description'>
          <Input placeholder='description' />
        </Form.Item>
      </Form>
    </AntdDrawer>
  );
};
