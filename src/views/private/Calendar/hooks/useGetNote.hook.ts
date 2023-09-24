import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetNoteResponse, getNote } from 'api';
import { QueryKeys } from 'enums';

export const useGetNote = (
  id: string
): UseQueryResult<GetNoteResponse, Error> =>
  useQuery([QueryKeys.GET_CALENDAR, id], () => getNote({ id }), {
    enabled: !!id
  });
