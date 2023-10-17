import { DATE_FORMAT, DATE_ONLY_MONTH } from 'constants/timeFormat';
import { PageWrapper } from 'components';
import { Calendar as AntdCalendar } from 'antd';
import { useUserStore } from 'stores';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { useCustomSearchParams } from 'hooks';
import { CalendarOutlined, MoreOutlined } from '@ant-design/icons';
import { useGetCalendar, useNotesItems, useRemoveNote } from './hooks';
import { SignCell } from './Calendar.styled';
import { CellForm, Notes } from './components';

export const Calendar = () => {
  const { id: userId } = useUserStore();
  const { mutateAsync: removeNote } = useRemoveNote();
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

  const [selectedDate, setselectedDate, removeSelectedDate] =
    useCustomSearchParams('date');
  const [selectedNoteId, setSelectedNoteId, removeSelectedNoteId] =
    useCustomSearchParams('id');

  const [selectedMonth, setSelectedMonth] = useState(
    dayjs().format(DATE_ONLY_MONTH)
  );
  const { data: calendarData } = useGetCalendar(userId, selectedMonth);

  const handleSelect = (date: Dayjs) => {
    setselectedDate(date.format('YYYY-MM-DD'));
  };

  const handleOpenForm = (id: string) => {
    setIsFormVisible(true);
    setSelectedNoteId(id);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
    removeSelectedNoteId();
  };

  const noteDropdownItems = useNotesItems(handleOpenForm, removeNote);

  const handlePanelChange = (date: Dayjs) => {
    setSelectedMonth(date.format(DATE_ONLY_MONTH));
  };

  const cellRender = (current: Dayjs) => {
    const dateString = current.format(DATE_FORMAT);
    const shouldSign = calendarData?.find((date) =>
      dayjs(date.start_date).format(DATE_FORMAT).includes(dateString)
    );

    return shouldSign ? <SignCell /> : null;
  };

  return (
    <PageWrapper title='Calendar' icon={<CalendarOutlined />}>
      <AntdCalendar
        cellRender={cellRender}
        onPanelChange={handlePanelChange}
        onSelect={handleSelect}
      />
      <Notes
        userId={userId}
        date={selectedDate}
        isSidebarVisible={Boolean(selectedDate)}
        onCloseSidebar={removeSelectedDate}
        openForm={handleOpenForm}
        noteDropdownItems={noteDropdownItems}
        noteDropdownIcon={<MoreOutlined />}
      />
      <CellForm
        userId={userId}
        id={selectedNoteId as string}
        date={selectedDate as string}
        isSidebarVisible={Boolean(selectedNoteId) || isFormVisible}
        onCloseSidebar={handleCloseForm}
      />
    </PageWrapper>
  );
};
