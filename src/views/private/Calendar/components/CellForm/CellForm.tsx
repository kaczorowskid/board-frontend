import { Form, TimePicker } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { AntdModal } from 'components';
import TextArea from 'antd/es/input/TextArea';
import { useFillForm } from 'hooks';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { useCreateNote, useEditNote, useGetNote } from '../../hooks';
import { CellFormProps, CellFormType, inputsRule } from './CellForm.types';
import { CellFormInputs } from './CellForm.enum';
import { initialValues } from './CellForm.schema';

export const CellForm = ({
  userId,
  id,
  date,
  isSidebarVisible,
  onCloseSidebar
}: CellFormProps) => {
  const isEdit = Boolean(id);
  const { t } = useTranslation();

  const [form] = useForm();
  const { data: noteData } = useGetNote(id as string);
  const { mutateAsync: createNote } = useCreateNote();
  const { mutateAsync: editNote } = useEditNote();

  useFillForm(
    {
      ...noteData,
      hour: dayjs(noteData?.hour, 'HH:mm')
    },
    form,
    isSidebarVisible,
    isEdit
  );

  const handleSubmit = (values: CellFormType) => {
    const hour = values?.hour?.format('HH:mm');

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
      title={t('private.calendar.add-note')}
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
          label={t('private.calendar.hour')}
          rules={inputsRule[CellFormInputs.HOUR]}
        >
          <TimePicker
            format={'HH:mm'}
            placeholder={t('private.calendar.hour')}
          />
        </Form.Item>
        <Form.Item
          name={CellFormInputs.NOTE}
          label={t('private.calendar.note')}
          rules={inputsRule[CellFormInputs.NOTE]}
        >
          <TextArea placeholder={t('private.calendar.note')} />
        </Form.Item>
      </Form>
    </AntdModal>
  );
};
