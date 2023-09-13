import { MenuProps } from 'antd';
import { UseColumn } from 'types';

export const useTicketItems =
  (
    onEdit: UseColumn['onEdit'],
    onDelete: UseColumn['onDelete']
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
      }
    ];
