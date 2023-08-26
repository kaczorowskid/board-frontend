import { Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useUserStore } from 'stores';
import { AntdDrawer } from 'components';
import { useCreate } from '../../hooks';
import { FolderFormProps, FolderFormType } from './FolderForm.type';
import { FolderFormInputs } from './FolderForm.enum';

export const FolderForm = ({
  isSidebarVisible,
  onCloseSidebar,
  onSave
}: FolderFormProps) => {
  const [form] = useForm<FolderFormType>();

  const { mutateAsync: createFolder } = useCreate();
  const { id } = useUserStore();

  const handleSubmit = (values: FolderFormType) => {
    createFolder({ ...values, user_id: id });
    form.resetFields();
  };

  return (
    <AntdDrawer
      open={isSidebarVisible}
      onClose={onCloseSidebar}
      onSumbit={onSave}
      title='Add folder'
    >
      <Form id='form' form={form} onFinish={handleSubmit}>
        <Form.Item name={FolderFormInputs.NAME}>
          <Input placeholder='name' />
        </Form.Item>
        <Form.Item name={FolderFormInputs.DESCRIPTION}>
          <Input placeholder='description' />
        </Form.Item>
      </Form>
    </AntdDrawer>
  );
};
