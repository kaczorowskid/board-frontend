import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getNotesByDate } from 'api';
import { QueryKeys } from 'enums';
import { GetNotesByDateResponse } from 'contracts';

export const useGetNotesByDate = (
  date: string | null,
  userId: string
): UseQueryResult<GetNotesByDateResponse[], Error> =>
  useQuery(
    [QueryKeys.GET_CALENDAR, date],
    () => getNotesByDate({ date: date as string, user_id: userId }),
    {
      enabled: !!date
    }
  );
