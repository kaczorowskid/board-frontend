import { Form, Button, Input } from 'antd';
import { AntdInput } from 'components';
import { routesUrls } from 'utils';
import { Container, HintContainer, StyledLink, Title } from '../common';
import { useLogin } from './Login.hook';
import { LoginForm } from './Login.type';
import { initValues } from './Login.schema';
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
        <AntdInput name={LoginFormInputs.EMAIL} placeholder='email' />
        <AntdInput
          name={LoginFormInputs.PASSWORD}
          placeholder='password'
          customInput={Input.Password}
        />
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
