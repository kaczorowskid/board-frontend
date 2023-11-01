import { useForm } from 'antd/es/form/Form';
import { Form, Input } from 'antd';
import { AntdModal } from 'components';
import { useCustomSearchParams, useFillForm } from 'hooks';
import { useParams } from 'react-router-dom';
import { useCreateColumn, useEditColumn, useGetColumn } from '../../hooks';
import { SearchParams } from '../../Board.type';
import { AddColumnFormProps, AddColumnFormType } from './AddColumnForm.type';
import { AddColumnFormInputs } from './AddColumnForm.enum';
import { initialValues, inputRules } from './AddColumnForm.schema';

export const AddColumnForm = ({
  isSidebarVisible,
  onCloseSidebar
}: AddColumnFormProps) => {
  const { boardId } = useParams<{ boardId: string }>();
  const {
    params: { columnId }
  } = useCustomSearchParams<SearchParams>();

  const isEdit = Boolean(columnId);
  const [form] = useForm();

  const { data: columnData } = useGetColumn(columnId as string);
  const { mutateAsync: createColumn } = useCreateColumn();
  const { mutateAsync: editColumn } = useEditColumn();

  useFillForm(columnData, form, isSidebarVisible, isEdit);

  const handleSubmit = (values: AddColumnFormType) => {
    if (isEdit) {
      editColumn({ ...values, id: columnId as string });
    } else {
      createColumn({ ...values, board_id: boardId as string });
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
          label='Title'
          rules={inputRules[AddColumnFormInputs.TITLE]}
        >
          <Input placeholder='Title' />
        </Form.Item>
      </Form>
    </AntdModal>
  );
};
