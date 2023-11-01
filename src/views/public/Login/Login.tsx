import { Form, Button, Input } from 'antd';
import { routesUrls } from 'routes';
import { Container, HintContainer, StyledLink, Title } from '../common';
import { useLogin } from './Login.hook';
import { LoginForm } from './Login.type';
import { initValues, inputsRule } from './Login.schema';
import { LoginFormInputs } from './Login.enum';

export const Login = () => {
  const [form] = Form.useForm<LoginForm>();
  const { mutate: login } = useLogin();

  const handleFinish = (payload: LoginForm) => {
    login(payload);
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form
        layout='vertical'
        form={form}
        onFinish={handleFinish}
        initialValues={initValues}
      >
        <Form.Item
          name={LoginFormInputs.EMAIL}
          rules={inputsRule[LoginFormInputs.EMAIL]}
        >
          <Input name={LoginFormInputs.EMAIL} placeholder='email' />
        </Form.Item>
        <Form.Item
          name={LoginFormInputs.PASSWORD}
          rules={inputsRule[LoginFormInputs.PASSWORD]}
        >
          <Input.Password
            name={LoginFormInputs.PASSWORD}
            placeholder='password'
          />
        </Form.Item>

        <HintContainer>
          <StyledLink to={routesUrls.auth.resetPassword}>
            Forgot password?
          </StyledLink>
          <Button htmlType='submit' type='primary'>
            Login
          </Button>
        </HintContainer>
      </Form>
    </Container>
  );
};
