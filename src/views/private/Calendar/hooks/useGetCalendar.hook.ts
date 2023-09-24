import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetCalendarResponse, getCalendar } from 'api';
import { QueryKeys } from 'enums';

export const useGetCalendar = (
  user_id: string,
  date: string
): UseQueryResult<GetCalendarResponse[], Error> =>
  useQuery(
    [QueryKeys.GET_CALENDAR, user_id, date],
    () => getCalendar({ user_id, date }),
    {
      enabled: !!user_id
    }
  );
