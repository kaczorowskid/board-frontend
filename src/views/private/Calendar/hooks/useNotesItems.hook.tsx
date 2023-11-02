import { ExclamationCircleFilled } from '@ant-design/icons';
import { MenuProps, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import { UseColumn } from 'types';

const { confirm } = Modal;

export const useNotesItems = (
  onEdit: UseColumn['onEdit'],
  onDelete: UseColumn['onDelete']
): ((id: string) => MenuProps['items']) => {
  const { t } = useTranslation();

  return (id: string) => [
    {
      key: 'edit',
      label: t('common.edit'),
      onClick: () => onEdit(id)
    },
    {
      key: 'delete',
      label: t('common.delete'),
      onClick: () => {
        confirm({
          title: t('common.do-you-want-to-delete'),
          icon: <ExclamationCircleFilled />,
          onOk: () => {
            onDelete({ id });
          }
        });
      }
    }
  ];
};
