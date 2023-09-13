import { MenuProps } from 'antd';
import { UseColumn } from 'types';

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
        onClick: () => onDelete(id)
      },
      {
        key: 'add',
        label: 'Add ticket',
        onClick: () => onAddTicket(id)
      }
    ];
