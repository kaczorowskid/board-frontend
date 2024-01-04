import { useQuery } from '@tanstack/react-query';
import { getDashboard } from 'api';
import { GetDashboardResponse } from 'board-contracts';
import { QueryKeys } from 'enums';

interface UseGetDashboard {
  recentBoards?: GetDashboardResponse['recentBoards'];
  recentTickets?: GetDashboardResponse['recentTickets'];
  calendar?: GetDashboardResponse['calendar'];
}

export const useGetDashboard = (
  user_id: string,
  date: string
): UseGetDashboard => {
  const { data } = useQuery(
    [QueryKeys.GET_BOARD, user_id, date],
    () => getDashboard({ user_id, date }),
    {
      enabled: !!user_id
    }
  );

  const recentBoards = data?.recentBoards;
  const recentTickets = data?.recentTickets;
  const calendar = data?.calendar;

  return {
    recentBoards,
    recentTickets,
    calendar
  };
};
