import { Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useUserStore } from 'stores';
import { AntdModal } from 'components';
import { useGetBoard } from 'views/private/Board/hooks';
import { useFillForm } from 'hooks';
import { useCreateBoard, useEditBoard } from '../../hooks';
import { BoardFormType, BoardsFormProps } from './BoardsForm.type';
import { BoardsFormInputs } from './BoardForm.enum';
import {
  initialValues,
  inputsLabel,
  inputsPlaceholder
} from './BoardsForm.schema';

export const BoardsForm = ({
  id,
  isSidebarVisible,
  onCloseSidebar
}: BoardsFormProps) => {
  const isEdit = Boolean(id);
  const [form] = useForm();

  const { data: boardData } = useGetBoard(id as string);
  const { mutateAsync: createBoard } = useCreateBoard();
  const { mutateAsync: editBoard } = useEditBoard();
  const { id: userId } = useUserStore();

  useFillForm(boardData, form, isSidebarVisible, isEdit);

  const handleSubmit = (values: BoardFormType) => {
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
      title='Add board'
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
          label={inputsLabel[BoardsFormInputs.TITLE]}
        >
          <Input placeholder={inputsPlaceholder[BoardsFormInputs.TITLE]} />
        </Form.Item>
        <Form.Item
          name={BoardsFormInputs.DESCRIPTION}
          label={inputsLabel[BoardsFormInputs.DESCRIPTION]}
        >
          <Input
            placeholder={inputsPlaceholder[BoardsFormInputs.DESCRIPTION]}
          />
        </Form.Item>
      </Form>
    </AntdModal>
  );
};
