import { SelectProps } from 'antd';
import { SearchProps } from 'antd/es/input';
import { CommonFormProps } from 'types';

export interface FilterProps extends CommonFormProps {
  onSearch: SearchProps['onChange'];
  onChangePrios: SelectProps['onChange'];
}
