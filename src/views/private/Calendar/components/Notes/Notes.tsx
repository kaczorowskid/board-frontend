import { AntdDrawer } from 'components';
import { Alert, Button, Dropdown, Space } from 'antd';
import { useGetNotesByDate } from '../../hooks';
import { NotesProps } from './Notes.types';

export const Notes = ({
  date,
  userId,
  isSidebarVisible,
  onCloseSidebar,
  openForm,
  noteDropdownItems,
  noteDropdownIcon
}: NotesProps) => {
  const { data } = useGetNotesByDate(date, userId);

  return (
    <AntdDrawer
      open={isSidebarVisible}
      onClose={onCloseSidebar}
      title={`Notes - ${date}`}
    >
      <Space direction='vertical' size={24} style={{ width: '100%' }}>
        <Button block onClick={() => openForm('')}>
          Add note
        </Button>
        {data?.map(({ id, note, hour }) => (
          <Alert
            key={id}
            message={
              <span>
                <strong>{hour}</strong>
                <span>&nbsp;-&nbsp;</span>
                <span>{note}</span>
              </span>
            }
            action={
              <Dropdown
                menu={{ items: noteDropdownItems(id) }}
                trigger={['click']}
              >
                {noteDropdownIcon}
              </Dropdown>
            }
          />
        ))}
      </Space>
    </AntdDrawer>
  );
};
