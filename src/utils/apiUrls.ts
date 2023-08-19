import { generatePath } from 'react-router-dom';

export const apiUrls = {
  user: {
    register: '/user/register',
    login: '/user/login',
    getUser: '/user',
    resetPassword: '/user/reset-password',
    setNewPassword: '/user/set-new-password',
    updateUser: (id: string) => `/${generatePath('user/:id', { id })}`,
    confirmAccount: (token: string | null) =>
      `/${generatePath('user/confirm-account/:token', { token })}`
  },
  table: {
    createTable: '/table',
    getTablesWithPagination: '/table'
  },
  folder: {
    getFoldersWithPagination: '/folder',
    createFolder: '/folder'
  }
};
