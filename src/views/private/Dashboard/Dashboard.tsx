import { DATE_FORMAT } from 'constants/timeFormat';
import { PageWrapper } from 'components';
import { useUserStore } from 'stores';
import dayjs from 'dayjs';
import { useState } from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
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

export const Dashboard = (): JSX.Element => {
  const { id: userId } = useUserStore();
  const { t } = useTranslation();
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
    <PageWrapper
      title={t('private.dashboard.dashboard')}
      icon={<AppstoreOutlined />}
    >
      <ItemsContainer>
        <DashboardItem
          title={t('private.dashboard.recent-tickets')}
          gridArea='recent-tickets'
          component={<RecentTickets data={recentTickets?.data} />}
        />
        <DashboardItem
          title={t('private.dashboard.statistics')}
          gridArea='statisctic'
          component={<Statistics option={option} />}
        />
        <DashboardItem
          title={t('private.dashboard.recent-boards')}
          gridArea='recent-boards'
          component={<RecentBoards data={recentBoards?.data} />}
        />
        <DashboardItem
          title='Notes'
          gridArea='calendar-info'
          component={<CalendarInfo data={notesData} />}
        />
        <DashboardItem
          gridArea='calendar'
          component={
            <Calendar
              data={calendar as any}
              setSelectedDate={setSelectedDate}
            />
          }
        />
      </ItemsContainer>
    </PageWrapper>
  );
};
