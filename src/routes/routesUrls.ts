export const routesUrls = {
  base: '/',
  auth: {
    register: '/register',
    login: '/login',
    resetPassword: '/reset-password',
    setNewPassword: '/set-new-password',
    confirmAccount: '/confirm-account'
  },
  app: {
    board: '/boards/:boardId',
    dashboard: '/dashboard',
    boards: '/boards',
    folders: '/folders',
    calendar: '/calendar',
    calendarNotes: '/calendar/:id',
    user: '/user'
  }
};
