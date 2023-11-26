import { ExclamationCircleFilled } from '@ant-design/icons';
import { MenuProps, Modal } from 'antd';
import { GetCalendarResponse } from 'contracts/calendar.contracts';
import { useTranslation } from 'react-i18next';
import { UseColumn } from 'types';

const { confirm } = Modal;

export const useNotesItems = (
  data: GetCalendarResponse[] | undefined,
  onEdit: UseColumn['onEdit'],
  onDelete: UseColumn['onDelete'],
  onDone: ({ id, is_done }: { id: string; is_done: boolean }) => void
): ((id: string) => MenuProps['items']) => {
  const { t } = useTranslation();

  return (id: string) => {
    const record = data?.find((note) => note.id === id);

    return [
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
      },
      {
        key: 'finish',
        label: t('private.calendar.mark-as-done'),
        onClick: () => onDone({ id, is_done: true }),
        disabled: record?.is_done
      },
      {
        key: 'inProgress',
        label: t('private.calendar.mark-as-in-progress'),
        onClick: () => onDone({ id, is_done: false }),
        disabled: !record?.is_done
      }
    ];
  };
};
