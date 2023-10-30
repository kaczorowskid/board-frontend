import { ExclamationCircleFilled } from '@ant-design/icons';
import { MenuProps, Modal } from 'antd';
import { ObjectParams, UseColumn } from 'types';

const { confirm } = Modal;

export const useTicketItems =
  (
    onEdit: (data: ObjectParams) => void,
    onDelete: UseColumn['onDelete']
  ): ((id: string) => MenuProps['items']) =>
  (id: string) =>
    [
      {
        key: 'edit',
        label: 'Edit',
        onClick: () => {
          onEdit({ ticketId: id, target: 'ticket' });
        }
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
      }
    ];
