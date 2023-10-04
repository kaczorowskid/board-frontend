import {
  ExclamationCircleFilled,
  UnorderedListOutlined
} from '@ant-design/icons';
import { Dropdown, MenuProps, TableColumnsType, Modal } from 'antd';
import { GetBoardsWithPaginationResponse } from 'api';
import { useUserStore } from 'stores';
import { UseColumn } from 'types';

const { confirm } = Modal;

const items = (
  userId: string,
  record: UseColumn<GetBoardsWithPaginationResponse['data'][0]>['record'],
  onEdit: UseColumn['onEdit'],
  onDelete: UseColumn['onDelete'],
  onOpenBoard: (id: string) => void,
  shareBoard?: (id: string) => void
): MenuProps['items'] => [
  {
    key: 'edit',
    label: 'Edit',
    onClick: () => onEdit(record.id)
  },
  {
    key: 'delete',
    label: 'Delete',
    disabled: record.owner_id !== userId,
    onClick: () => {
      confirm({
        title: 'Do you Want to delete this item?',
        icon: <ExclamationCircleFilled />,
        onOk: () => {
          onDelete({ id: record.id });
        }
      });
    }
  },
  {
    key: 'open',
    label: 'Open board',
    onClick: () => onOpenBoard(record.id)
  },
  {
    key: 'generate',
    label: 'Share board',
    onClick: () => shareBoard?.(record.id)
  }
];

export const useColumns = (
  onEdit: UseColumn['onEdit'],
  onDelete: UseColumn['onDelete'],
  onOpenBoard: (id: string) => void,
  shareBoard?: (id: string) => void
): TableColumnsType<GetBoardsWithPaginationResponse['data'][0]> => {
  const { id } = useUserStore();

  return [
    {
      key: 'actions',
      align: 'left',
      width: 100,
      render: (record) => (
        <Dropdown
          menu={{
            items: items(id, record, onEdit, onDelete, onOpenBoard, shareBoard)
          }}
          trigger={['click']}
        >
          <UnorderedListOutlined />
        </Dropdown>
      )
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: '50%'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: '50%'
    }
  ];
};
