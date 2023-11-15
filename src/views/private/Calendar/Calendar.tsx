import { DATE_FORMAT, DATE_ONLY_MONTH } from 'constants/timeFormat';
import { PageWrapper } from 'components';
import { Calendar as AntdCalendar } from 'antd';
import { useUserStore } from 'stores';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { useCustomSearchParams } from 'hooks';
import { CalendarOutlined, MoreOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useGetCalendar, useNotesItems, useRemoveNote } from './hooks';
import { SignCell } from './Calendar.styled';
import { CellForm, Notes } from './components';
import { SearchParams } from './Calendar.types';

export const Calendar = () => {
  const { id: userId } = useUserStore();
  const { mutateAsync: removeNote } = useRemoveNote();
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const { t } = useTranslation();

  const { params, setParams, deleteParams } =
    useCustomSearchParams<SearchParams>();

  const [selectedMonth, setSelectedMonth] = useState(
    dayjs().format(DATE_ONLY_MONTH)
  );
  const { data: calendarData } = useGetCalendar(userId, selectedMonth);

  const handleSelect = (date: Dayjs) => {
    setParams({ date: date.format('YYYY-MM-DD') });
  };

  const handleOpenForm = (id: string) => {
    setIsFormVisible(true);
    setParams({ ...params, id });
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
    deleteParams('id');
  };

  const handleCloseNotes = () => {
    deleteParams('date');
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
    <PageWrapper
      title={t('private.calendar.calendar')}
      icon={<CalendarOutlined />}
    >
      <AntdCalendar
        cellRender={cellRender}
        onPanelChange={handlePanelChange}
        onSelect={handleSelect}
        style={{ borderRadius: '20px' }}
      />
      <Notes
        userId={userId}
        date={params.date}
        isSidebarVisible={Boolean(params.date)}
        onCloseSidebar={handleCloseNotes}
        openForm={handleOpenForm}
        noteDropdownItems={noteDropdownItems}
        noteDropdownIcon={<MoreOutlined />}
      />
      <CellForm
        userId={userId}
        id={params.id as string}
        date={params.date as string}
        isSidebarVisible={Boolean(params.id) || isFormVisible}
        onCloseSidebar={handleCloseForm}
      />
    </PageWrapper>
  );
};
