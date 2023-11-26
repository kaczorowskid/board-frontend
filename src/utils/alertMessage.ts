import { message } from 'antd';
import i18n from './i18n';

export enum Operation {
  ADD = 'add',
  EDIT = 'edit',
  DELETE = 'delete',
  UPDATE = 'update'
}

export const successMessagge = (
  entityName: string,
  operation: Operation
): void => {
  const text = {
    [Operation.ADD]: i18n.t('messages.success.add'),
    [Operation.EDIT]: i18n.t('messages.success.edit'),
    [Operation.DELETE]: i18n.t('messages.success.delete'),
    [Operation.UPDATE]: i18n.t('messages.success.update')
  };

  message.success(`${entityName} ${text[operation]}`);
};

export const errorMessagge = (
  entityName: string,
  operation: Operation
): void => {
  const text = {
    [Operation.ADD]: i18n.t('messages.error.add'),
    [Operation.EDIT]: i18n.t('messages.error.edit'),
    [Operation.DELETE]: i18n.t('messages.error.delete'),
    [Operation.UPDATE]: i18n.t('messages.error.update')
  };

  message.success(`${entityName} ${text[operation]}`);
};
