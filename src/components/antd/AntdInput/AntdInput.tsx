import { Input, Form, InputProps } from 'antd';
import { AntdInutProps } from './AntdInput.type';

export const AntdInput = ({
  name,
  label,
  rules,
  customInput: CustomInput = Input,
  ...props
}: AntdInutProps & InputProps) => (
  <Form.Item name={name} label={label} rules={rules}>
    <CustomInput {...props} />
  </Form.Item>
);
