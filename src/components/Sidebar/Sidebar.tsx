import { Button, Drawer, Space } from 'antd';
import { SidebarProps } from './Sidebar.types';

export const Sidebar = ({
  onClose,
  onSumbit,
  children,
  ...props
}: SidebarProps) => {
  const extra = (
    <Space>
      <Button onClick={onClose}>Click</Button>
      <Button onClick={onSumbit} form='form' key='sumbit' htmlType='submit'>
        Submit
      </Button>
    </Space>
  );

  return (
    <Drawer width={550} extra={extra} {...props}>
      {children}
    </Drawer>
  );
};
