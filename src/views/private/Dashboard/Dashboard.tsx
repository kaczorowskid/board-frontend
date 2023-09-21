import { PageWrapper } from 'components';
import { useUserStore } from 'stores';
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
  const { id } = useUserStore();
  const { recentBoards, recentTickets } = useGetDashboard(id);
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
              <Calendar />
            </TileWrapper>
          </CalendarContainer>
          <CalendarInfoContainer></CalendarInfoContainer>
        </ItemsContainer>
      </PageWrapper>
    </>
  );
};
