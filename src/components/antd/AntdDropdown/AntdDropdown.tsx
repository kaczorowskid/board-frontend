import { Dropdown } from 'antd';
import { Container } from './AntdDropdown.styled';
import { AntdDropdownProps } from './AntdDropdown.types';

export const AntdDropdown = ({
  children,
  ...props
}: AntdDropdownProps): JSX.Element => (
  <Dropdown trigger={['click']} {...props}>
    <Container>{children}</Container>
  </Dropdown>
);
