import { Form, Button, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { Container, Title } from '../common';
import { useRegister } from './Register.hook';
import { initValues, inputsRule } from './Register.schema';
import { RegisterForm } from './Register.type';
import { RegisterFormInputs } from './Register.enum';

export const Register = () => {
  const [form] = Form.useForm<RegisterForm>();
  const { mutate: register } = useRegister();
  const { t } = useTranslation();

  const handleFinish = (payload: RegisterForm) => {
    // eslint-disable-next-line no-param-reassign
    delete payload.confirmPassword;

    register(payload);
  };

  return (
    <Container>
      <Title>{t('public.register.register')}</Title>
      <Form
        layout='vertical'
        form={form}
        onFinish={handleFinish}
        initialValues={initValues}
      >
        <Form.Item
          name={RegisterFormInputs.FIRST_NAME}
          rules={inputsRule[RegisterFormInputs.FIRST_NAME]}
        >
          <Input
            name={RegisterFormInputs.FIRST_NAME}
            placeholder={t('public.register.first-name')}
          />
        </Form.Item>
        <Form.Item
          name={RegisterFormInputs.LAST_NAME}
          rules={inputsRule[RegisterFormInputs.LAST_NAME]}
        >
          <Input
            name={RegisterFormInputs.LAST_NAME}
            placeholder={t('public.register.last-name')}
          />
        </Form.Item>
        <Form.Item
          name={RegisterFormInputs.EMAIL}
          rules={inputsRule[RegisterFormInputs.EMAIL]}
        >
          <Input
            name={RegisterFormInputs.EMAIL}
            placeholder={t('public.register.email')}
          />
        </Form.Item>
        <Form.Item
          name={RegisterFormInputs.PASSWORD}
          rules={inputsRule[RegisterFormInputs.PASSWORD]}
        >
          <Input.Password
            name={RegisterFormInputs.PASSWORD}
            placeholder={t('public.register.password')}
          />
        </Form.Item>
        <Form.Item
          name={RegisterFormInputs.CONFIRM_PASSWORD}
          rules={inputsRule[RegisterFormInputs.CONFIRM_PASSWORD]}
        >
          <Input.Password
            name={RegisterFormInputs.CONFIRM_PASSWORD}
            placeholder={t('public.register.confirm-password')}
          />
        </Form.Item>
        <Button htmlType='submit' block type='primary'>
          {t('public.register.register')}
        </Button>
      </Form>
    </Container>
  );
};
