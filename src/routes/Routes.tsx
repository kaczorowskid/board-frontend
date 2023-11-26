import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider
} from 'react-router-dom';
import { AuthLayout, MainLayout } from 'layouts';
import {
  Board,
  Boards,
  Calendar,
  ConfirmAccount,
  Dashboard,
  Login,
  Page404,
  Register,
  ResetPassword,
  SetNewPassword,
  User
} from 'views';
import { routesUrls } from './routesUrls';

export const Routes = (): JSX.Element => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path={routesUrls.base}
          element={<Navigate to={routesUrls.app.dashboard} />}
        />
        <Route element={<AuthLayout />}>
          <Route path={routesUrls.auth.login} element={<Login />} />
          <Route path={routesUrls.auth.register} element={<Register />} />
          <Route
            path={routesUrls.auth.resetPassword}
            element={<ResetPassword />}
          />
          <Route
            path={routesUrls.auth.setNewPassword}
            element={<SetNewPassword />}
          />
          <Route
            path={routesUrls.auth.confirmAccount}
            element={<ConfirmAccount />}
          />
        </Route>
        <Route element={<MainLayout />}>
          <Route path={routesUrls.app.board} element={<Board />} />
          <Route path={routesUrls.app.dashboard} element={<Dashboard />} />
          <Route path={routesUrls.app.boards} element={<Boards />} />
          <Route path={routesUrls.app.calendar} element={<Calendar />} />
          <Route path={routesUrls.app.calendarNotes} element={<Calendar />} />
          <Route path={routesUrls.app.user} element={<User />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
