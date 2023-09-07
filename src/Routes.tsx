import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { AuthLayout, MainLayout } from 'layouts';
import { routesUrls } from 'utils';
import {
  Board,
  Boards,
  ConfirmAccount,
  Dashboard,
  Folders,
  Login,
  Register,
  ResetPassword,
  SetNewPassword
} from 'views';

export const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
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
          <Route path={routesUrls.app.folders} element={<Folders />} />
          <Route path={routesUrls.app.boards} element={<Boards />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
