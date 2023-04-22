import { Form, Button, Input } from 'antd';
import { AntdInput } from 'components';
import { routesUrls } from 'utils';
import { Container, HintContainer, StyledLink, Title } from '../common';

export const Login = () => (
  <Container>
    <Title>Login</Title>
    <Form layout='vertical'>
      <AntdInput name='email' placeholder='email' />
      <AntdInput name='password' placeholder='password' customInput={Input.Password} />
      <HintContainer>
        <StyledLink to={routesUrls.auth.resetPassword}>Forgot password?</StyledLink>
        <Button type='primary'>Login</Button>
      </HintContainer>
    </Form>
  </Container>
);
