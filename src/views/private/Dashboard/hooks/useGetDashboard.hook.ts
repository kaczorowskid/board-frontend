import { useQuery } from '@tanstack/react-query';
import { getDashboard } from 'api';
import { QueryKeys } from 'enums';

interface UseGetDashboard {
  recentBoards?: {
    data: Record<string, any>[];
    count: number;
  };
  recentTickets?: {
    data: Record<string, any>[];
    count: number;
  };
}

export const useGetDashboard = (user_id: string): UseGetDashboard => {
  const { data } = useQuery(
    [QueryKeys.GET_BOARD, user_id],
    () => getDashboard({ user_id }),
    {
      enabled: !!user_id
    }
  );

  const recentBoards = data?.recentBoards;
  const recentTickets = data?.recentTickets;

  return {
    recentBoards,
    recentTickets
  };
};
