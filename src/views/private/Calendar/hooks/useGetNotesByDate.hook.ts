import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetNotesByDateResponse, getNotesByDate } from 'api';
import { QueryKeys } from 'enums';

export const useGetNotesByDate = (
  date: string | null,
  userId: string
): UseQueryResult<GetNotesByDateResponse[], Error> =>
  useQuery(
    [QueryKeys.GET_CALENDAR, date],
    () => getNotesByDate({ date, user_id: userId }),
    {
      enabled: !!date
    }
  );
