import { Form, Button, Input } from 'antd';
import { Container, Title } from '../common';
import { useRegister } from './Register.hook';
import { initValues, inputsRule } from './Register.schema';
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
      <Form
        layout='vertical'
        form={form}
        onFinish={handleFinish}
        initialValues={initValues}
      >
        <Form.Item
          name={RegisterFormInputs.EMAIL}
          rules={inputsRule[RegisterFormInputs.EMAIL]}
        >
          <Input name={RegisterFormInputs.EMAIL} placeholder='email' />
        </Form.Item>
        <Form.Item
          name={RegisterFormInputs.PASSWORD}
          rules={inputsRule[RegisterFormInputs.PASSWORD]}
        >
          <Input.Password
            name={RegisterFormInputs.PASSWORD}
            placeholder='password'
          />
        </Form.Item>
        <Form.Item
          name={RegisterFormInputs.CONFIRM_PASSWORD}
          rules={inputsRule[RegisterFormInputs.CONFIRM_PASSWORD]}
        >
          <Input.Password
            name={RegisterFormInputs.CONFIRM_PASSWORD}
            placeholder='confirm password'
          />
        </Form.Item>
        <Button htmlType='submit' block type='primary'>
          Register
        </Button>
      </Form>
    </Container>
  );
};
