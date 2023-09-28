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
    updateBoard: (id: string) => `board/update/${generatePath(':id', { id })}`,
    createColumn: '/board/column',
    removeColumn: (id: string) => `board/column/${generatePath(':id', { id })}`,
    createTicket: '/board/ticket',
    createBoard: '/board/board',
    editBoard: (id: string) => `/board/${generatePath(':id', { id })}`,
    removeBoard: (id: string) => `/board/${generatePath(':id', { id })}`,
    editTicket: (id: string) => `/board/ticket/${generatePath(':id', { id })}`,
    removeTicket: (id: string) =>
      `/board/ticket/${generatePath(':id', { id })}`,
    getTicket: (id: string) => `/board/ticket/${generatePath(':id', { id })}`,
    getColumn: (id: string) => `/board/column/${generatePath(':id', { id })}`,
    editColumn: (id: string) => `/board/column/${generatePath(':id', { id })}`
  },
  dashboard: {
    getDashboard: (id: string) => `/dashboard/${generatePath(':id', { id })}`,
    getNotesByDate: '/dashboard/notes'
  },
  calendar: {
    getCalendar: '/calendar',
    createNote: '/calendar/note',
    editNote: (id: string) => `/calendar/note/${generatePath(':id', { id })}`,
    getNotesByDate: '/calendar/notes',
    getNote: (id: string) => `/calendar/note/${generatePath(':id', { id })}`,
    removeNote: (id: string) => `/calendar/note/${generatePath(':id', { id })}`
  }
};
