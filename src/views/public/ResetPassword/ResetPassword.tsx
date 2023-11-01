import { Form, Button, Input } from 'antd';
import { Container, Title } from '../common';
import { ResetPasswordForm } from './ResetPassword.type';
import { useResetPassword } from './ResetPassword.hook';
import { initValues, inputsRule } from './ResetPassword.schema';
import { ResetPasswordFormInputs } from './ResetPassword.enum';

export const ResetPassword = () => {
  const [form] = Form.useForm<ResetPasswordForm>();
  const { mutate: resetPassword } = useResetPassword();

  const handleFinish = (payload: ResetPasswordForm) => {
    resetPassword(payload);
  };

  return (
    <Container>
      <Title>Reset Password</Title>
      <Form
        layout='vertical'
        form={form}
        onFinish={handleFinish}
        initialValues={initValues}
      >
        <Form.Item
          name={ResetPasswordFormInputs.EMAIL}
          rules={inputsRule[ResetPasswordFormInputs.EMAIL]}
        >
          <Input name={ResetPasswordFormInputs.EMAIL} placeholder='email' />
        </Form.Item>
        <Button htmlType='submit' block type='primary'>
          Reset Password
        </Button>
      </Form>
    </Container>
  );
};
