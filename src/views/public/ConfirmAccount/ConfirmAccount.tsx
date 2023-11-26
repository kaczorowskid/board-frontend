import { Form, Button } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Title } from '../common';
import { useConfirmAccount } from './ConfirmAccount.hook';
import { SearchParams } from './ConfirmAccount.enum';
import { initialValues } from './ConfirmAccount.schema';

export const ConfirmAccount = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get(SearchParams.TOKEN);
  const { t } = useTranslation();

  const [form] = Form.useForm();
  const { mutate: confirmAccount } = useConfirmAccount();

  const handleFinish = (): void => {
    confirmAccount({ token });
  };

  return (
    <Container>
      <Title>{t('public.confirm-account.confirm-account')}</Title>
      <Form
        layout='vertical'
        form={form}
        onFinish={handleFinish}
        initialValues={initialValues}
      >
        <Button block htmlType='submit' type='primary'>
          {t('public.confirm-account.confirm')}
        </Button>
      </Form>
    </Container>
  );
};
