import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getCalendar } from 'api';
import { QueryKeys } from 'enums';
import { GetCalendarResponse } from 'contracts';

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
