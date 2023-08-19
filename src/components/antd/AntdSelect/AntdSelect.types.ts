import { FormItemProps, SelectProps } from 'antd';
import { CSSProperties } from 'react';
import { ListQuery } from 'types';

export interface SingleSelectProps {
  labelStyle?: CSSProperties;
  fieldLabel?: string;
  tooltip?: string;
  rules?: FormItemProps['rules'];
  pagination?: JSX.Element;
  searchDisabled?: boolean;
  options: SelectProps['options'];
  listQuery?: ListQuery;
  setListQuery?: React.Dispatch<React.SetStateAction<ListQuery>>;
  allowCopy?: boolean;
  copyValue?: string;
  isLoading?: boolean;
}
