import { useState } from 'react';
import { Col, Form, Input, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useUserStore } from 'stores';
import { useFillForm } from 'hooks';
import { useGetUser, useUpdateUser } from '../../hooks';
import { UserDetailsFormInputs } from './UserDetailsForm.enum';
import {
  initialValues,
  inputsRule,
  requiredFields
} from './UserDetailsForm.schema';
import { UserDetailsFormType } from './UserDetailsForm.types';
import { StyledButton } from './UserDetailsForm.styled';

export const UserDetailsForm = () => {
  const [form] = useForm();
  const { id } = useUserStore();
  const { data } = useGetUser(id);
  const { mutateAsync: update } = useUpdateUser();

  useFillForm(data, form, true, true);

  const [showButton, setShowButton] = useState<boolean>(false);

  const handleValuesChange = () => {
    if (form.isFieldsTouched(requiredFields, false)) {
      setShowButton(true);
    }
  };

  const handleCancel = () => {
    setShowButton(false);
    form.resetFields();
  };

  const handleSubmit = (values: UserDetailsFormType) => {
    update({ ...values, id });
    setShowButton(false);
  };

  return (
    <Form
      id='user-details'
      form={form}
      layout='vertical'
      onFinish={handleSubmit}
      onValuesChange={handleValuesChange}
      initialValues={initialValues}
    >
      <Row gutter={[10, 22]}>
        <Form.Item
          name={UserDetailsFormInputs.FIRST_NAME}
          rules={inputsRule[UserDetailsFormInputs.FIRST_NAME]}
        >
          <Input placeholder='First name' />
        </Form.Item>
        <Form.Item
          name={UserDetailsFormInputs.LAST_NAME}
          rules={inputsRule[UserDetailsFormInputs.LAST_NAME]}
        >
          <Input placeholder='Last name' />
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
