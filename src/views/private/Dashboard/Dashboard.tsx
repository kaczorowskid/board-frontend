import { DATE_FORMAT } from 'constants/timeFormat';
import { PageWrapper } from 'components';
import { useUserStore } from 'stores';
import dayjs from 'dayjs';
import { Alert, Space } from 'antd';
import { useState } from 'react';
import { useGetNotesByDate } from '../Calendar/hooks';
import {
  Calendar,
  RecentBoards,
  RecentTickets,
  Statistics,
  TileWrapper
} from './components';
import {
  CalendarContainer,
  ItemsContainer,
  RecentBoardsContainer,
  RecentTicketsContainer,
  StatisticContainer,
  CalendarInfoContainer
} from './Dashboard.styled';
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
          <RecentTicketsContainer>
            <TileWrapper title='Recent tickets'>
              <RecentTickets data={recentTickets?.data} />
            </TileWrapper>
          </RecentTicketsContainer>
          <StatisticContainer>
            <TileWrapper title='Statistics'>
              <Statistics option={option} />
            </TileWrapper>
          </StatisticContainer>
          <RecentBoardsContainer>
            <TileWrapper title='Recent boards'>
              <RecentBoards data={recentBoards?.data} />
            </TileWrapper>
          </RecentBoardsContainer>
          <CalendarContainer>
            <TileWrapper>
              <Calendar data={calendar} setSelectedDate={setSelectedDate} />
            </TileWrapper>
          </CalendarContainer>
          <CalendarInfoContainer>
            <TileWrapper>
              <Space direction='vertical' size={24} style={{ width: '100%' }}>
                {notesData?.map(({ note, hour }) => (
                  <Alert
                    message={
                      <span>
                        <strong>{hour}</strong>
                        <span>&nbsp;-&nbsp;</span>
                        <span>{note}</span>
                      </span>
                    }
                  />
                ))}
              </Space>
            </TileWrapper>
          </CalendarInfoContainer>
        </ItemsContainer>
      </PageWrapper>
    </>
  );
};
