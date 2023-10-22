import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { editTicket } from 'api';
import { QueryKeys } from 'enums';
import { queryClient } from 'utils';
import { EditTicketRequest, EditTicketResponse } from 'contracts';

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
