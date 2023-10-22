import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getNote } from 'api';
import { QueryKeys } from 'enums';
import { GetNoteResponse } from 'contracts';

export const useGetNote = (
  id: string
): UseQueryResult<GetNoteResponse, Error> =>
  useQuery([QueryKeys.GET_CALENDAR, id], () => getNote({ id }), {
    enabled: !!id
  });
