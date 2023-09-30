import { DATE_FORMAT } from 'constants/timeFormat';
import { PageWrapper } from 'components';
import { useUserStore } from 'stores';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useGetNotesByDate } from '../Calendar/hooks';
import {
  Calendar,
  CalendarInfo,
  DashboardItem,
  RecentBoards,
  RecentTickets,
  Statistics
} from './components';
import { ItemsContainer } from './Dashboard.styled';
import { useGetDashboard } from './hooks';
import { statisticsDataMapper } from './utils';

export const Dashboard = () => {
  const { id: userId } = useUserStore();
  const currentMonth = dayjs().format(DATE_FORMAT);

  const [selectedDate, setSelectedDate] = useState<string>(currentMonth);
  const { recentBoards, recentTickets, calendar } = useGetDashboard(
    userId,
    currentMonth
  );
  const { data: notesData } = useGetNotesByDate(selectedDate, userId);
  const option = statisticsDataMapper(
    recentBoards?.count,
    recentTickets?.count
  );

  return (
    <>
      <PageWrapper title='Dashboard'>
        <ItemsContainer>
          <DashboardItem
            title='Recent tickets'
            gridArea='recent-tickets'
            component={<RecentTickets data={recentTickets?.data} />}
          />
          <DashboardItem
            title='Statistics'
            gridArea='statisctic'
            component={<Statistics option={option} />}
          />
          <DashboardItem
            title='Recent boards'
            gridArea='recent-boards'
            component={<RecentBoards data={recentBoards?.data} />}
          />
          <DashboardItem
            gridArea='calendar-info'
            component={<CalendarInfo data={notesData} />}
          />
          <DashboardItem
            gridArea='calendar'
            component={
              <Calendar data={calendar} setSelectedDate={setSelectedDate} />
            }
          />
        </ItemsContainer>
      </PageWrapper>
    </>
  );
};
