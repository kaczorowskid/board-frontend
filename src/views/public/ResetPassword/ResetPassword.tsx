import { Form, Button } from 'antd';
import { AntdInput } from 'components';
import { Container, Title } from '../common';

export const ResetPassword = () => (
  <Container>
    <Title>Reset Password</Title>
    <Form layout='vertical'>
      <AntdInput name='email' placeholder='email' />
      <Button block type='primary'>
        Send
      </Button>
    </Form>
  </Container>
);
