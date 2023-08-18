import { Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useUserStore } from 'stores';
import { Sidebar } from 'components';
import { useCreateFolder } from './FolderForm.hook';
import { FolderFormProps } from './FolderForm.type';

export const FolderForm = ({ isSidebarVisible, onCloseSidebar, onSave }: FolderFormProps) => {
  const [form] = useForm();

  const { mutateAsync: createFolder } = useCreateFolder();
  const { id } = useUserStore();

  const handleSubmit = (values: any) => {
    createFolder({ ...values, user_id: id });
  };

  return (
    <Sidebar open={isSidebarVisible} onClose={onCloseSidebar} onSumbit={onSave} title='Add folder'>
      <Form id='form' form={form} onFinish={handleSubmit}>
        <Form.Item name='name'>
          <Input placeholder='name' />
        </Form.Item>
        <Form.Item name='description'>
          <Input placeholder='description' />
        </Form.Item>
      </Form>
    </Sidebar>
  );
};
