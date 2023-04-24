import { Form, Button } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { Container, Title } from '../common';
import { useConfirmAccount } from './ConfirmAccount.hook';
import { SearchParams } from './ConfirmAccount.enum';

export const ConfirmAccount = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get(SearchParams.TOKEN);

  const [form] = Form.useForm();
  const { mutate: confirmAccount } = useConfirmAccount();

  const handleFinish = () => {
    confirmAccount({ token });
  };

  return (
    <Container>
      <Title>Confirm Account</Title>
      <Form layout='vertical' form={form} onFinish={handleFinish}>
        <Button block htmlType='submit' type='primary'>
          Confirm
        </Button>
      </Form>
    </Container>
  );
};
