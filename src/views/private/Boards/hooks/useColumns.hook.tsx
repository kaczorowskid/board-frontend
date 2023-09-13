import { UnorderedListOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, TableColumnsType } from 'antd';
import { GetBoardsWithPaginationResponse } from 'api';
import { UseColumn } from 'types';

const items = (
  record: UseColumn<GetBoardsWithPaginationResponse['data'][0]>['record'],
  onEdit: UseColumn['onEdit'],
  onDelete: UseColumn['onDelete'],
  onOpenBoard: (id: string) => void
): MenuProps['items'] => [
  {
    key: 'edit',
    label: 'Edit',
    onClick: () => onEdit(record.id)
  },
  {
    key: 'delete',
    label: 'Delete',
    onClick: () => onDelete(record.id)
  },
  {
    key: 'open',
    label: 'Open board',
    onClick: () => onOpenBoard(record.id)
  }
];

export const useColumns = (
  onEdit: UseColumn['onEdit'],
  onDelete: UseColumn['onDelete'],
  onOpenBoard: (id: string) => void
): TableColumnsType<GetBoardsWithPaginationResponse['data'][0]> => [
  {
    key: 'actions',
    align: 'left',
    width: 100,
    render: (record) => (
      <Dropdown
        menu={{ items: items(record, onEdit, onDelete, onOpenBoard) }}
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
