import { Form, TimePicker } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { AntdDrawer } from 'components';
import { useEffect } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { useCreateNote, useEditNote, useGetNote } from '../../hooks';
import { CellFormProps, CellFormType } from './CellForm.types';
import { CellFormInputs } from './CellForm.enum';

export const CellForm = ({
  userId,
  id,
  date,
  isSidebarVisible,
  onCloseSidebar
}: CellFormProps) => {
  const isEdit = Boolean(id);

  const [form] = useForm();
  const { data: noteData } = useGetNote(id as string);
  const { mutateAsync: createNote } = useCreateNote();
  const { mutateAsync: editNote } = useEditNote();

  useEffect(() => {
    if (!isEdit) {
      form.resetFields();
    } else {
      form.setFieldsValue(noteData);
    }
  }, [isSidebarVisible, noteData]);

  const handleSubmit = (values: CellFormType) => {
    const time = values.hour.format('HH:mm');

    if (isEdit) {
      editNote({ ...values, start_date: date, hour: time, id: id as string });
    } else {
      createNote({ ...values, start_date: date, hour: time, user_id: userId });
    }
    form.resetFields();
    onCloseSidebar();
  };

  return (
    <AntdDrawer
      open={isSidebarVisible}
      onClose={onCloseSidebar}
      formId='form'
      title='Add note'
    >
      <Form id='form' form={form} onFinish={handleSubmit}>
        <Form.Item name={CellFormInputs.HOUR}>
          <TimePicker format={'HH:mm'} />
        </Form.Item>
        <Form.Item name={CellFormInputs.NOTE}>
          <TextArea placeholder='description' />
        </Form.Item>
      </Form>
    </AntdDrawer>
  );
};