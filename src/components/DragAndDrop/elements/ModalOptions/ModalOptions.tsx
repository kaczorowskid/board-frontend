import { Modal } from 'antd';

interface ModalOptionsProps {
  id: string;
  isOpen: boolean;
  modalClose?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const ModalOptions = ({ id, isOpen, modalClose }: ModalOptionsProps) => (
  <Modal open={isOpen} onOk={modalClose}>
    {id}
  </Modal>
);
