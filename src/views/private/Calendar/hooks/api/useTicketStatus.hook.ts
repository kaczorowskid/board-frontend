import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { updateNoteStatus } from 'api';
import { QueryKeys } from 'enums';
import {
  Operation,
  errorMessagge,
  i18n,
  queryClient,
  successMessagge
} from 'utils';
import {
  UpdateNoteStatusRequest,
  UpdateNoteStatusResponse
} from 'contracts/calendar.contracts';

export const useTicketStatus = (): UseMutationResult<
  UpdateNoteStatusResponse,
  Error,
  UpdateNoteStatusRequest
> =>
  useMutation(({ id, is_done }) => updateNoteStatus({ id, is_done }), {
    onSuccess: async () => {
      successMessagge(i18n.t('private.calendar.note'), Operation.UPDATE);
      await queryClient.invalidateQueries([QueryKeys.GET_CALENDAR]);
    },
    onError: () => {
      errorMessagge(i18n.t('private.calendar.note'), Operation.UPDATE);
    }
  });
