import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { EditTicketRequest, EditTicketResponse, editTicket } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';

export const useEditTicket = (): UseMutationResult<
  EditTicketResponse,
  Error,
  EditTicketRequest
> =>
  useMutation(editTicket, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([QueryKeys.GET_BOARD]);
    }
  });
