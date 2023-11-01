import { useState } from 'react';
import { Col, Form, Input, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useUserStore } from 'stores';
import { useUpdatePassword } from '../../hooks';
import {
  initialValues,
  inputsRule,
  requiredFields
} from './ChangePasswordForm.schema';
import { ChangePasswordFormInputs } from './ChangePasswordForm.enum';
import { StyledButton } from './ChangePasswordForm.styled';
import { ChangePasswordFormType } from './ChangePasswordForm.types';

export const ChangePasswordForm = () => {
  const [form] = useForm();
  const [showButton, setShowButton] = useState<boolean>(false);
  const { mutateAsync: updateUser } = useUpdatePassword();
  const { id } = useUserStore();

  const handleValuesChange = () => {
    if (form.isFieldsTouched(requiredFields, true)) {
      setShowButton(true);
    }
  };

  const handleCancel = () => {
    setShowButton(false);
    form.resetFields();
  };

  const handleSubmit = (values: ChangePasswordFormType) => {
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
          <Input placeholder='Old password' />
        </Form.Item>
        <Form.Item
          name={ChangePasswordFormInputs.NEW_PASSWORD}
          rules={inputsRule[ChangePasswordFormInputs.NEW_PASSWORD]}
        >
          <Input placeholder='New password' />
        </Form.Item>
        <Form.Item
          name={ChangePasswordFormInputs.REPEAT_PASSWORD}
          rules={inputsRule[ChangePasswordFormInputs.REPEAT_PASSWORD]}
        >
          <Input placeholder='Repeat password' />
        </Form.Item>
        {showButton && (
          <Row gutter={16} style={{ width: '100%' }}>
            <Col span={12}>
              <StyledButton onClick={handleCancel}>Cancel</StyledButton>
            </Col>
            <Col span={12}>
              <StyledButton type='primary' htmlType='submit'>
                Submit
              </StyledButton>
            </Col>
          </Row>
        )}
      </Row>
    </Form>
  );
};
