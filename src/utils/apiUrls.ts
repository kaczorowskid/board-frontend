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
  },
  board: {
    getBoard: (id: string) => `/board/one/${generatePath(':id', { id })}`,
    getBoardsWithPagination: '/board',
    editBoard: (id: string) => `board/edit/${generatePath(':id', { id })}`,
    createColumn: '/board/column',
    removeColumn: (id: string) => `board/column/${generatePath(':id', { id })}`,
    createTicket: '/board/ticket',
    createBoard: '/board/board'
  }
};
