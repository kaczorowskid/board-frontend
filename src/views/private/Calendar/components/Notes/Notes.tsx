import { AntdDrawer, AntdDropdown } from 'components';
import { Alert, Button, Space } from 'antd';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <AntdDrawer
      open={isSidebarVisible}
      onClose={onCloseSidebar}
      title={`${t('private.calendar.note')} - ${date}`}
    >
      <Space direction='vertical' size={10} style={{ width: '100%' }}>
        <Button block onClick={() => openForm('')}>
          {t('private.calendar.add-note')}
        </Button>
        {data?.map(({ id, note, is_done: isDone }) => (
          <Alert
            type={isDone ? 'success' : 'info'}
            key={id}
            message={
              <span>{isDone ? <s>{note}</s> : <span>{note}</span>}</span>
            }
            action={
              <AntdDropdown menu={{ items: noteDropdownItems(id) }}>
                {noteDropdownIcon}
              </AntdDropdown>
            }
          />
        ))}
      </Space>
    </AntdDrawer>
  );
};
