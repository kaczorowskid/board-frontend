import { Form, Button, Input } from 'antd';
import { routesUrls } from 'routes';
import { useTranslation } from 'react-i18next';
import { Container, HintContainer, StyledLink, Title } from '../common';
import { useLogin } from './Login.hook';
import { LoginForm } from './Login.type';
import { initValues, inputsRule } from './Login.schema';
import { LoginFormInputs } from './Login.enum';

export const Login = () => {
  const [form] = Form.useForm<LoginForm>();
  const { mutate: login } = useLogin();
  const { t } = useTranslation();

  const handleFinish = (payload: LoginForm) => {
    login(payload);
  };

  return (
    <Container>
      <Title>{t('public.login.login')}</Title>
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
          <Input
            name={LoginFormInputs.EMAIL}
            placeholder={t('public.login.email')}
          />
        </Form.Item>
        <Form.Item
          name={LoginFormInputs.PASSWORD}
          rules={inputsRule[LoginFormInputs.PASSWORD]}
        >
          <Input.Password
            name={LoginFormInputs.PASSWORD}
            placeholder={t('public.login.password')}
          />
        </Form.Item>

        <HintContainer>
          <StyledLink to={routesUrls.auth.resetPassword}>
            {t('public.login.forgot-password-question')}
          </StyledLink>
          <Button htmlType='submit' type='primary'>
            {t('public.login.login')}
          </Button>
        </HintContainer>
      </Form>
    </Container>
  );
};
