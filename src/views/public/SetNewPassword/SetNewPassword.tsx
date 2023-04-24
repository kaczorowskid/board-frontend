import { Form, Button, Input } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { AntdInput } from 'components';
import { Container, Title } from '../common';
import { SetNewPasswordForm } from './SetNewPassword.type';
import { initValues } from './SewNewPassword.schema';
import { SearchParams, SetNewPasswordFormInputs } from './SetNewPassword.enum';
import { useSetNewPassword } from './SetNewPassword.hook';

export const SetNewPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get(SearchParams.TOKEN);

  const [form] = Form.useForm<SetNewPasswordForm>();
  const { mutate: setNewPassword } = useSetNewPassword();

  const handleFinish = (payload: SetNewPasswordForm) => {
    setNewPassword({ token, ...payload });
  };

  return (
    <Container>
      <Title>Set New Password</Title>
      <Form layout='vertical' form={form} onFinish={handleFinish} initialValues={initValues}>
        <AntdInput
          name={SetNewPasswordFormInputs.OLD_PASSWORD}
          placeholder='old password'
          customInput={Input.Password}
        />
        <AntdInput name={SetNewPasswordFormInputs.PASSWORD} placeholder='password' customInput={Input.Password} />
        <Button htmlType='submit' block type='primary'>
          Set New Password
        </Button>
      </Form>
    </Container>
  );
};
