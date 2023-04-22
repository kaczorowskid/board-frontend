import { FormItemProps, InputProps, InputRef } from 'antd';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export interface AntdInutProps {
  name: FormItemProps['name'];
  label?: FormItemProps['label'];
  rules?: FormItemProps['rules'];
  customInput?: ForwardRefExoticComponent<InputProps & RefAttributes<InputRef>>;
}
