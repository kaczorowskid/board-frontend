import { useForm } from 'antd/es/form/Form';
import { Form, Input } from 'antd';
import { AntdDrawer } from 'components';
import { useEffect } from 'react';
import { useEditColumn, useGetColumn } from '../../hooks';
import { AddColumnFormProps, AddColumnFormType } from './AddColumnForm.type';
import { AddColumnFormInputs } from './AddColumnForm.enum';
import { useCreateColumn } from './AddFolderForm.hook';

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

  useEffect(() => {
    if (!isEdit) {
      form.resetFields();
    } else {
      form.setFieldsValue(columnData);
    }
  }, [isSidebarVisible, columnData]);

  const handleSubmit = (values: AddColumnFormType) => {
    if (isEdit) {
      editColumn({ ...values, id: columnData?.id as string });
    } else {
      createColumn({ ...values, board_id: boardId });
    }
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
