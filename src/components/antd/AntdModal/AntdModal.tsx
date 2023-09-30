import { Button, Modal, Space } from 'antd';
import { AntdModalProps } from './AntdModal.types';

export const AntdModal = ({
  onClose,
  onSumbit,
  formId,
  children,
  ...props
}: AntdModalProps) => {
  const footer = (
    <Space>
      <Button onClick={onClose}>Cancel</Button>
      <Button
        type='primary'
        onClick={onSumbit}
        form={formId}
        key='sumbit'
        htmlType='submit'
      >
        Submit
      </Button>
    </Space>
  );

  return (
    <Modal closable={false} width={550} footer={footer} {...props}>
      {children}
    </Modal>
  );
};
