import { ExclamationCircleFilled } from '@ant-design/icons';
import { MenuProps, Modal } from 'antd';
import { UseColumn } from 'types';

const { confirm } = Modal;

export const useCommentItems =
  (onDelete: UseColumn['onDelete']): ((id: string) => MenuProps['items']) =>
  (id: string) =>
    [
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
