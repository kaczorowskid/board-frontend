import { Form, Button, Input } from 'antd';
import { AntdInput } from 'components';
import { Container, Title } from '../common';
import { useRegister } from './Register.hook';
import { initValues } from './Register.schema';
import { RegisterForm } from './Register.type';
import { RegisterFormInputs } from './Register.enum';

export const Register = () => {
  const [form] = Form.useForm<RegisterForm>();
  const { mutate: register } = useRegister();

  const handleFinish = (payload: RegisterForm) => {
    // eslint-disable-next-line no-param-reassign
    delete payload.confirmPassword;

    register(payload);
  };

  return (
    <Container>
      <Title>Register</Title>
      <Form layout='vertical' form={form} onFinish={handleFinish} initialValues={initValues}>
        <AntdInput name={RegisterFormInputs.EMAIL} placeholder='email' />
        <AntdInput name={RegisterFormInputs.PASSWORD} placeholder='password' customInput={Input.Password} />
        <AntdInput
          name={RegisterFormInputs.CONFIRM_PASSWORD}
          placeholder='confirm password'
          customInput={Input.Password}
        />
        <Button htmlType='submit' block type='primary'>
          Register
        </Button>
      </Form>
    </Container>
  );
};
