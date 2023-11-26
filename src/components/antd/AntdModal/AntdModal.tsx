import { Button, Modal, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { AntdModalProps } from './AntdModal.types';

export const AntdModal = ({
  onClose,
  onSumbit,
  formId,
  children,
  ...props
}: AntdModalProps): JSX.Element => {
  const { t } = useTranslation();
  const footer = (
    <Space>
      <Button onClick={onClose}>{t('common.cancel')}</Button>
      <Button
        type='primary'
        onClick={onSumbit}
        form={formId}
        key='sumbit'
        htmlType='submit'
      >
        {t('common.submit')}
      </Button>
    </Space>
  );

  return (
    <Modal closable={false} width={550} footer={footer} {...props}>
      {children}
    </Modal>
  );
};
