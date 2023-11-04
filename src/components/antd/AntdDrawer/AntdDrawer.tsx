import { Button, Drawer, Space } from 'antd';
import { AntdDrawerProps } from './AntdDrawer.types';

export const AntdDrawer = ({
  hideSubmit,
  onClose,
  onSumbit,
  formId,
  children,
  ...props
}: AntdDrawerProps) => {
  const extra = (
    <Space>
      <Button onClick={onClose}>Cancel</Button>
      {!hideSubmit ? (
        <Button onClick={onSumbit} form={formId} key='sumbit' htmlType='submit'>
          Submit
        </Button>
      ) : null}
    </Space>
  );

  return (
    <Drawer closable={false} width={550} extra={extra} {...props}>
      {children}
    </Drawer>
  );
};
