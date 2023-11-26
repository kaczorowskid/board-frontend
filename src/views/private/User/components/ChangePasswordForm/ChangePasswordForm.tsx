import { useState } from 'react';
import { Col, Form, Input, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useUserStore } from 'stores';
import { useTranslation } from 'react-i18next';
import { useUpdatePassword } from '../../hooks';
import {
  initialValues,
  inputsRule,
  requiredFields
} from './ChangePasswordForm.schema';
import { ChangePasswordFormInputs } from './ChangePasswordForm.enum';
import { StyledButton } from './ChangePasswordForm.styled';
import { ChangePasswordFormType } from './ChangePasswordForm.types';

export const ChangePasswordForm = (): JSX.Element => {
  const [form] = useForm();
  const [showButton, setShowButton] = useState<boolean>(false);
  const { mutateAsync: updateUser } = useUpdatePassword();
  const { id } = useUserStore();
  const { t } = useTranslation();

  const handleValuesChange = (): void => {
    if (form.isFieldsTouched(requiredFields, true)) {
      setShowButton(true);
    }
  };

  const handleCancel = (): void => {
    setShowButton(false);
    form.resetFields();
  };

  const handleSubmit = (values: ChangePasswordFormType): void => {
    const mappedValues = { ...values };
    delete mappedValues.repeat_password;

    updateUser({ ...mappedValues, id });
  };

  return (
    <Form
      form={form}
      layout='vertical'
      onFinish={handleSubmit}
      onValuesChange={handleValuesChange}
      initialValues={initialValues}
    >
      <Row gutter={[10, 22]}>
        <Form.Item
          name={ChangePasswordFormInputs.OLD_PASSWORD}
          rules={inputsRule[ChangePasswordFormInputs.OLD_PASSWORD]}
        >
          <Input placeholder={t('private.user.old-password')} />
        </Form.Item>
        <Form.Item
          name={ChangePasswordFormInputs.NEW_PASSWORD}
          rules={inputsRule[ChangePasswordFormInputs.NEW_PASSWORD]}
        >
          <Input placeholder={t('private.user.new-password')} />
        </Form.Item>
        <Form.Item
          name={ChangePasswordFormInputs.REPEAT_PASSWORD}
          rules={inputsRule[ChangePasswordFormInputs.REPEAT_PASSWORD]}
        >
          <Input placeholder={t('private.user.repeat-password')} />
        </Form.Item>
        {showButton && (
          <Row gutter={16} style={{ width: '100%' }}>
            <Col span={12}>
              <StyledButton onClick={handleCancel}>
                {t('common.cancel')}
              </StyledButton>
            </Col>
            <Col span={12}>
              <StyledButton type='primary' htmlType='submit'>
                {t('common.submit')}
              </StyledButton>
            </Col>
          </Row>
        )}
      </Row>
    </Form>
  );
};
