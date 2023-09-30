import { useQuery } from '@tanstack/react-query';
import { getDashboard } from 'api';
import { QueryKeys } from 'enums';

interface UseGetDashboard {
  recentBoards?: {
    data: Record<string, string | number | Date>[];
    count: number;
  };
  recentTickets?: {
    data: Record<string, string | number | Date>[];
    count: number;
  };
  calendar?: Record<string, string | Date>[];
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
