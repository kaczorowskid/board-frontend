import { Button, Drawer, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { AntdDrawerProps } from './AntdDrawer.types';

export const AntdDrawer = ({
  hideSubmit,
  onClose,
  onSumbit,
  formId,
  children,
  ...props
}: AntdDrawerProps) => {
  const { t } = useTranslation();

  const extra = (
    <Space>
      <Button onClick={onClose}>{t('common.cancel')}</Button>
      {!hideSubmit ? (
        <Button onClick={onSumbit} form={formId} key='sumbit' htmlType='submit'>
          {t('common.submit')}
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
