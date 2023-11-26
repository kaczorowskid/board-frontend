import { Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useUserStore } from 'stores';
import { AntdModal } from 'components';
import { useGetBoard } from 'views/private/Board/hooks';
import { useFillForm } from 'hooks';
import { useTranslation } from 'react-i18next';
import { useCreateBoard, useEditBoard } from '../../hooks';
import { BoardFormType, BoardsFormProps } from './BoardsForm.type';
import { BoardsFormInputs } from './BoardForm.enum';
import { initialValues, inputsRule } from './BoardsForm.schema';

export const BoardsForm = ({
  id,
  isSidebarVisible,
  onCloseSidebar
}: BoardsFormProps): JSX.Element => {
  const isEdit = Boolean(id);
  const [form] = useForm();
  const { t } = useTranslation();

  const { data: boardData } = useGetBoard(id as string);
  const { mutateAsync: createBoard } = useCreateBoard();
  const { mutateAsync: editBoard } = useEditBoard();
  const { id: userId } = useUserStore();

  useFillForm(boardData, form, isSidebarVisible, isEdit);

  const handleSubmit = (values: BoardFormType): void => {
    if (isEdit) {
      editBoard({ ...values, id });
    } else {
      createBoard({ ...values, user_id: userId });
    }
    form.resetFields();
    onCloseSidebar();
  };

  return (
    <AntdModal
      open={isSidebarVisible}
      onClose={onCloseSidebar}
      formId='form'
      title={t('private.boards.add-board')}
    >
      <Form
        id='form'
        layout='vertical'
        form={form}
        onFinish={handleSubmit}
        initialValues={initialValues}
      >
        <Form.Item
          name={BoardsFormInputs.TITLE}
          label={t('private.boards.title')}
          rules={inputsRule[BoardsFormInputs.TITLE]}
        >
          <Input placeholder={t('private.boards.title')} />
        </Form.Item>
        <Form.Item
          name={BoardsFormInputs.DESCRIPTION}
          label={t('private.boards.description')}
          rules={inputsRule[BoardsFormInputs.DESCRIPTION]}
        >
          <Input placeholder={t('private.boards.description')} />
        </Form.Item>
      </Form>
    </AntdModal>
  );
};
