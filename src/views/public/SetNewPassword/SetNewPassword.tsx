import { Form, Button, Input } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Title } from '../common';
import { SetNewPasswordForm } from './SetNewPassword.type';
import { initValues, inputsRule } from './SewNewPassword.schema';
import { SearchParams, SetNewPasswordFormInputs } from './SetNewPassword.enum';
import { useSetNewPassword } from './SetNewPassword.hook';

export const SetNewPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get(SearchParams.TOKEN);
  const { t } = useTranslation();

  const [form] = Form.useForm<SetNewPasswordForm>();
  const { mutate: setNewPassword } = useSetNewPassword();

  const handleFinish = (payload: SetNewPasswordForm) => {
    setNewPassword({ token, ...payload });
  };

  return (
    <Container>
      <Title>{t('public.set-new-password.set-new-password')}</Title>
      <Form
        layout='vertical'
        form={form}
        onFinish={handleFinish}
        initialValues={initValues}
      >
        <Form.Item
          name={SetNewPasswordFormInputs.OLD_PASSWORD}
          rules={inputsRule[SetNewPasswordFormInputs.OLD_PASSWORD]}
        >
          <Input.Password
            name={SetNewPasswordFormInputs.OLD_PASSWORD}
            placeholder={t('public.set-new-password.old-password')}
          />
        </Form.Item>
        <Form.Item
          name={SetNewPasswordFormInputs.PASSWORD}
          rules={inputsRule[SetNewPasswordFormInputs.PASSWORD]}
        >
          <Input.Password
            name={SetNewPasswordFormInputs.PASSWORD}
            placeholder={t('public.set-new-password.password')}
          />
        </Form.Item>
        <Button htmlType='submit' block type='primary'>
          {t('public.set-new-password.set-new-password')}
        </Button>
      </Form>
    </Container>
  );
};
