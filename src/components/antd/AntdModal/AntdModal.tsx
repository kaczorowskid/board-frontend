import { Button, Modal } from 'antd';
import { AntdModalProps } from './AntdModal.type';

export const AntdModal = ({
  onSumbit,
  onClose,
  children,
  ...props
}: AntdModalProps) => {
  const customFooter = (
    <>
      <Button onClick={onClose}>Close</Button>
      <Button onClick={onSumbit} form='form' key='sumbit' htmlType='submit'>
        Submit
      </Button>
    </>
  );

  return (
    <Modal footer={customFooter} {...props}>
      {children}
    </Modal>
  );
};
