import { useForm } from 'antd/es/form/Form';
import { Form, Input } from 'antd';
import { AntdModal } from 'components';
import { useFillForm } from 'hooks';
import { useCreateColumn, useEditColumn, useGetColumn } from '../../hooks';
import { AddColumnFormProps, AddColumnFormType } from './AddColumnForm.type';
import { AddColumnFormInputs } from './AddColumnForm.enum';
import {
  initialValues,
  inputsLabel,
  inputsPlaceholder
} from './AddColumnForm.schema';

export const AddColumnForm = ({
  isSidebarVisible,
  onCloseSidebar,
  boardId,
  columnId
}: AddColumnFormProps) => {
  const isEdit = Boolean(columnId);
  const [form] = useForm();

  const { data: columnData } = useGetColumn(columnId);
  const { mutateAsync: createColumn } = useCreateColumn();
  const { mutateAsync: editColumn } = useEditColumn();

  useFillForm(columnData, form, isSidebarVisible, isEdit);

  const handleSubmit = (values: AddColumnFormType) => {
    if (isEdit) {
      editColumn({ ...values, id: columnId });
    } else {
      createColumn({ ...values, board_id: boardId });
    }
    form.resetFields();
    onCloseSidebar();
  };

  return (
    <AntdModal
      open={isSidebarVisible}
      onClose={onCloseSidebar}
      formId='columnForm'
      title='Add Column'
    >
      <Form
        id='columnForm'
        layout='vertical'
        form={form}
        onFinish={handleSubmit}
        initialValues={initialValues}
      >
        <Form.Item
          name={AddColumnFormInputs.TITLE}
          label={inputsLabel[AddColumnFormInputs.TITLE]}
        >
          <Input placeholder={inputsPlaceholder[AddColumnFormInputs.TITLE]} />
        </Form.Item>
      </Form>
    </AntdModal>
  );
};
