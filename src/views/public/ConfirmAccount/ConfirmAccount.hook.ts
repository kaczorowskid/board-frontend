import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import { confirmAccountUser } from 'api';
import {
  ConfirmAccountUserRequest,
  ConfirmAccountUserResponse
} from 'contracts';
import { i18n } from 'utils';

export const useConfirmAccount = (): UseMutationResult<
  ConfirmAccountUserResponse,
  Error,
  ConfirmAccountUserRequest
> =>
  useMutation(confirmAccountUser, {
    onSuccess: () => {
      message.success(
        i18n.t('public.confirm-account.account-has-been-confirmed')
      );
    },
    onError: () => {
      message.error(
        i18n.t('public.confirm-account.account-has-not-been-confirmed')
      );
    }
  });
