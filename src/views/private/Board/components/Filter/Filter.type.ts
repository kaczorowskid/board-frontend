import { SelectProps } from 'antd';
import { InputProps } from 'antd/lib';
import { CommonFormProps } from 'types';

export interface FilterProps extends CommonFormProps {
  onSearch: InputProps['onChange'];
  onChangePrios: SelectProps['onChange'];
}
