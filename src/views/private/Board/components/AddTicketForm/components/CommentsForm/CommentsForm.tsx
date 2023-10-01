import { useForm } from 'antd/es/form/Form';
import { Button, Form } from 'antd';
import { useState } from 'react';
import { useCreateComment } from 'views/private/Board/hooks';
import { RichTextEditor } from 'components';
import { AddTicketFormType, CommentsFormProps } from './CommentsForm.types';
import { initialValues, inputsPlaceholder } from './CommentsForm.schema';
import { CommentsFormInputs } from './CommentsForm.enum';

export const CommentsForm = ({ ticketId, userId }: CommentsFormProps) => {
  const [form] = useForm();
  const [isCommentAreaFocus, setIsCommentAreaFocus] = useState<boolean>(false);

  const { mutateAsync: createComment } = useCreateComment();

  const handleSubmit = (values: AddTicketFormType) => {
    if (values.text.trim() === '') {
      return;
    }

    createComment({ ...values, ticket_id: ticketId, user_id: userId });
    form.resetFields();
  };

  return (
    <Form
      id='commentForm'
      layout='vertical'
      form={form}
      onFinish={handleSubmit}
      initialValues={initialValues}
    >
      <Form.Item name={CommentsFormInputs.TEXT}>
        <RichTextEditor
          theme='snow'
          style={{ backgroundColor: 'white' }}
          placeholder={inputsPlaceholder[CommentsFormInputs.TEXT]}
          isFocus={isCommentAreaFocus}
          setIsFocus={() => setIsCommentAreaFocus(true)}
        />
      </Form.Item>
      {isCommentAreaFocus && (
        <Button
          type='primary'
          form='commentForm'
          onClick={() => {
            form.submit();
            setIsCommentAreaFocus(false);
          }}
        >
          Submit
        </Button>
      )}
    </Form>
  );
};