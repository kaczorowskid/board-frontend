import { generatePath } from 'react-router-dom';

const base = {
  user: '/user',
  board: '/board',
  dashboard: '/dashboard',
  calendar: '/calendar',
  comment: '/comment'
};

export const apiUrls = {
  user: {
    getUser: base.user,
    authorize: `${base.user}/authorization`,
    register: `${base.user}/register`,
    login: `${base.user}/login`,
    resetPassword: `${base.user}/reset-password`,
    setNewPassword: `${base.user}/set-new-password`,
    logout: `${base.user}/logout`,
    updateUser: (id: string) => `${base.user}/${generatePath(':id', { id })}`,
    confirmAccount: (token: string | null) =>
      `${base.user}/confirm-account/${generatePath(':token', { token })}`
  },
  board: {
    getBoardsWithPagination: base.board,
    createTicket: `${base.board}/ticket`,
    createBoard: `${base.board}/board`,
    createColumn: `${base.board}/column`,
    confirmShareToken: `${base.board}/share/confirm`,
    createShareToken: `${base.board}/share/create`,
    getBoard: (id: string) =>
      `${base.board}/one/${generatePath(':id', { id })}`,
    updateBoard: (id: string) =>
      `${base.board}/update/${generatePath(':id', { id })}`,
    removeColumn: (id: string) =>
      `${base.board}/column/${generatePath(':id', { id })}`,
    editBoard: (id: string) => `${base.board}/${generatePath(':id', { id })}`,
    removeBoard: (id: string) => `${base.board}/${generatePath(':id', { id })}`,
    editTicket: (id: string) =>
      `${base.board}/ticket/${generatePath(':id', { id })}`,
    removeTicket: (id: string) =>
      `${base.board}/ticket/${generatePath(':id', { id })}`,
    getTicket: (id: string) =>
      `${base.board}/ticket/${generatePath(':id', { id })}`,
    getColumn: (id: string) =>
      `${base.board}/column/${generatePath(':id', { id })}`,
    editColumn: (id: string) =>
      `${base.board}/column/${generatePath(':id', { id })}`
  },
  dashboard: {
    getNotesByDate: `${base.dashboard}/notes`,
    getDashboard: (id: string) =>
      `${base.dashboard}/${generatePath(':id', { id })}`
  },
  calendar: {
    getCalendar: base.calendar,
    createNote: `${base.calendar}/note`,
    getNotesByDate: `${base.calendar}/notes`,
    editNote: (id: string) =>
      `${base.calendar}/note/${generatePath(':id', { id })}`,
    getNote: (id: string) =>
      `${base.calendar}/note/${generatePath(':id', { id })}`,
    removeNote: (id: string) =>
      `${base.calendar}/note/${generatePath(':id', { id })}`
  },
  comment: {
    createComment: base.comment,
    removeComment: (id: string) =>
      `${base.comment}/${generatePath(':id', { id })}`
  }
};
