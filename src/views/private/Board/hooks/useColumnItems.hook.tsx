import { ExclamationCircleFilled } from '@ant-design/icons';
import { MenuProps, Modal } from 'antd';
import { UseColumn } from 'types';

const { confirm } = Modal;

export const useColumnItems =
  (
    onEdit: UseColumn['onEdit'],
    onDelete: UseColumn['onDelete'],
    onAddTicket: (id: string) => void
  ): ((id: string) => MenuProps['items']) =>
  (id: string) =>
    [
      {
        key: 'edit',
        label: 'Edit',
        onClick: () => onEdit(id)
      },
      {
        key: 'delete',
        label: 'Delete',
        onClick: () => {
          confirm({
            title: 'Do you Want to delete this item?',
            icon: <ExclamationCircleFilled />,
            onOk: () => {
              onDelete({ id });
            }
          });
        }
      },
      {
        key: 'add',
        label: 'Add ticket',
        onClick: () => onAddTicket(id)
      }
    ];
