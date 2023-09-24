import { Button, Drawer, Space } from 'antd';
import { AntdDrawerProps } from './AntdDrawer.types';

export const AntdDrawer = ({
  onClose,
  onSumbit,
  formId,
  children,
  ...props
}: AntdDrawerProps) => {
  const extra = (
    <Space>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onSumbit} form={formId} key='sumbit' htmlType='submit'>
        Submit
      </Button>
    </Space>
  );

  return (
    <Drawer closable={false} width={550} extra={extra} {...props}>
      {children}
    </Drawer>
  );
};