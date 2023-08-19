import { Select, Form, InputRef, Input } from 'antd';
import { SelectProps } from 'antd/lib/select';
import { usePaginationHelpers } from 'hooks';
import { ReactNode, useState, useRef } from 'react';
import { ListQuery } from 'types';
import { SingleSelectProps } from './AntdSelect.types';

const { Search } = Input;

export const AntdSelect = ({
  labelStyle,
  fieldLabel,
  tooltip,
  pagination,
  rules,
  searchDisabled,
  listQuery,
  setListQuery,
  allowCopy,
  copyValue,
  isLoading,
  options,
  ...props
}: SingleSelectProps & SelectProps): JSX.Element => {
  const searchbarRef = useRef<InputRef>(null);
  const [searchValue, setSearchValue] = useState<string>('');

  const { handleOnSearch, handleOnChangeSearch } = usePaginationHelpers(
    setListQuery as React.Dispatch<React.SetStateAction<ListQuery>>,
    setSearchValue,
    searchValue
  );

  const customDropdownRender = (originNode: ReactNode): JSX.Element => (
    <>
      {pagination && (
        <Search
          ref={searchbarRef}
          onKeyDown={(e) => e.stopPropagation()}
          disabled={searchDisabled}
          value={searchValue}
          // onChange={handleOnChangeSearch}
          // onSearch={handleOnSearch}
        />
      )}
      {pagination}
    </>
  );

  return (
    <Select
      showArrow
      allowClear
      dropdownAlign={{ overflow: { adjustX: 0, adjustY: -20 } }}
      dropdownRender={customDropdownRender}
      getPopupContainer={(trigger): HTMLElement => trigger}
      {...props}
    >
      {options?.map(({ key, value, label }) => (
        <Select.Option key={key || value} value={value}>
          {label}
        </Select.Option>
      ))}
    </Select>
  );
};
