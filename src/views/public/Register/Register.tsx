import { Form, Button, Input } from 'antd';
import { AntdInput } from 'components';
import { Container, Title } from '../common';

export const Register = () => (
  <Container>
    <Title>Register</Title>
    <Form layout='vertical'>
      <AntdInput name='email' placeholder='email' />
      <AntdInput name='password' placeholder='password' customInput={Input.Password} />
      <AntdInput name='confirmPassword' placeholder='confirm password' customInput={Input.Password} />
      <Button block type='primary'>
        Register
      </Button>
    </Form>
  </Container>
);
