import { Form, Button } from 'antd';
import { AntdInput } from 'components';
import { Container, Title } from '../common';
import { ResetPasswordForm } from './ResetPassword.type';
import { useResetPassword } from './ResetPassword.hook';
import { initValues } from './ResetPassword.schema';
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
      <Form layout='vertical' form={form} onFinish={handleFinish} initialValues={initValues}>
        <AntdInput name={ResetPasswordFormInputs.EMAIL} placeholder='email' />
        <Button htmlType='submit' block type='primary'>
          Reset Password
        </Button>
      </Form>
    </Container>
  );
};
