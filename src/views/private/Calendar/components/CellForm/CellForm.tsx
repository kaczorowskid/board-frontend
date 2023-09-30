import { Form, TimePicker } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { AntdModal } from 'components';
import TextArea from 'antd/es/input/TextArea';
import { useFillForm } from 'hooks';
import { useCreateNote, useEditNote, useGetNote } from '../../hooks';
import { CellFormProps, CellFormType } from './CellForm.types';
import { CellFormInputs } from './CellForm.enum';
import {
  initialValues,
  inputsLabel,
  inputsPlaceholder
} from './CellForm.schema';

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

  useFillForm(noteData, form, isSidebarVisible, isEdit);

  const handleSubmit = (values: CellFormType) => {
    const hour = values.hour.format('HH:mm');

    if (isEdit) {
      editNote({ ...values, start_date: date, hour, id: id as string });
    } else {
      createNote({ ...values, start_date: date, hour, user_id: userId });
    }
    form.resetFields();
    onCloseSidebar();
  };

  return (
    <AntdModal
      open={isSidebarVisible}
      onClose={onCloseSidebar}
      formId='form'
      title='Add note'
    >
      <Form
        id='form'
        layout='vertical'
        form={form}
        onFinish={handleSubmit}
        initialValues={initialValues}
      >
        <Form.Item
          name={CellFormInputs.HOUR}
          label={inputsLabel[CellFormInputs.HOUR]}
        >
          <TimePicker
            format={'HH:mm'}
            placeholder={inputsPlaceholder[CellFormInputs.HOUR]}
          />
        </Form.Item>
        <Form.Item
          name={CellFormInputs.NOTE}
          label={inputsLabel[CellFormInputs.NOTE]}
        >
          <TextArea placeholder={inputsPlaceholder[CellFormInputs.NOTE]} />
        </Form.Item>
      </Form>
    </AntdModal>
  );
};
