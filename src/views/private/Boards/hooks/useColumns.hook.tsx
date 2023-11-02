import {
  ExclamationCircleFilled,
  UnorderedListOutlined
} from '@ant-design/icons';
import { MenuProps, TableColumnsType, Modal } from 'antd';
import { GetBoardsWithPaginationResponse } from 'contracts';
import { AntdDropdown } from 'components';
import { useUserStore } from 'stores';
import { UseColumn } from 'types';
import { useTranslation } from 'react-i18next';
import { i18n } from 'utils';

const { confirm } = Modal;

const items = (
  userId: string,
  record: UseColumn<GetBoardsWithPaginationResponse['rows'][0]>['record'],
  onEdit: UseColumn['onEdit'],
  onDelete: UseColumn['onDelete'],
  onOpenBoard: (id: string) => void,
  shareBoard?: (id: string) => void
): MenuProps['items'] => [
  {
    key: 'edit',
    label: i18n.t('common.edit'),
    onClick: () => onEdit(record.id)
  },
  {
    key: 'delete',
    label: i18n.t('common.delete'),
    disabled: record.owner_id !== userId,
    onClick: () => {
      confirm({
        title: i18n.t('common.do-you-want-to-delete'),
        icon: <ExclamationCircleFilled />,
        onOk: () => {
          onDelete({ id: record.id });
        }
      });
    }
  },
  {
    key: 'open',
    label: i18n.t('private.boards.open-board'),
    onClick: () => onOpenBoard(record.id)
  },
  {
    key: 'generate',
    label: i18n.t('private.boards.share-board'),
    onClick: () => shareBoard?.(record.id)
  }
];
export const useColumns = (
  onEdit: UseColumn['onEdit'],
  onDelete: UseColumn['onDelete'],
  onOpenBoard: (id: string) => void,
  shareBoard?: (id: string) => void
): TableColumnsType<GetBoardsWithPaginationResponse['rows'][0]> => {
  const { id } = useUserStore();
  const { t } = useTranslation();

  return [
    {
      key: 'actions',
      align: 'left',
      width: 100,
      render: (record) => (
        <AntdDropdown
          menu={{
            items: items(id, record, onEdit, onDelete, onOpenBoard, shareBoard)
          }}
        >
          <UnorderedListOutlined />
        </AntdDropdown>
      )
    },
    {
      title: t('private.boards.title'),
      dataIndex: 'title',
      key: 'title',
      width: '50%'
    },
    {
      title: t('private.boards.description'),
      dataIndex: 'description',
      key: 'description',
      width: '50%'
    }
  ];
};
