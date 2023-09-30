import { Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useUserStore } from 'stores';
import { AntdModal } from 'components';
import { useCreate } from '../../hooks';
import { FolderFormProps, FolderFormType } from './FolderForm.type';
import { FolderFormInputs } from './FolderForm.enum';
import {
  initialValues,
  inputsLabel,
  inputsPlaceholder
} from './FolderForm.schema';

export const FolderForm = ({
  isSidebarVisible,
  onCloseSidebar
}: FolderFormProps) => {
  const [form] = useForm<FolderFormType>();

  const { mutateAsync: createFolder } = useCreate();
  const { id } = useUserStore();

  const handleSubmit = (values: FolderFormType) => {
    createFolder({ ...values, user_id: id });
    form.resetFields();
  };

  return (
    <AntdModal
      open={isSidebarVisible}
      onClose={onCloseSidebar}
      formId='form'
      title='Add folder'
    >
      <Form
        id='form'
        layout='vertical'
        form={form}
        onFinish={handleSubmit}
        initialValues={initialValues}
      >
        <Form.Item
          name={FolderFormInputs.NAME}
          label={inputsLabel[FolderFormInputs.NAME]}
        >
          <Input placeholder={inputsPlaceholder[FolderFormInputs.NAME]} />
        </Form.Item>
        <Form.Item
          name={FolderFormInputs.DESCRIPTION}
          label={inputsLabel[FolderFormInputs.DESCRIPTION]}
        >
          <Input
            placeholder={inputsPlaceholder[FolderFormInputs.DESCRIPTION]}
          />
        </Form.Item>
      </Form>
    </AntdModal>
  );
};
