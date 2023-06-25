import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { AuthLayout, TableLayout } from 'layouts';
import { routesUrls } from 'utils';
import { ConfirmAccount, Login, Register, ResetPassword, SetNewPassword, Table } from 'views';

export const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<AuthLayout />}>
          <Route path={routesUrls.auth.login} element={<Login />} />
          <Route path={routesUrls.auth.register} element={<Register />} />
          <Route path={routesUrls.auth.resetPassword} element={<ResetPassword />} />
          <Route path={routesUrls.auth.setNewPassword} element={<SetNewPassword />} />
          <Route path={routesUrls.auth.confirmAccount} element={<ConfirmAccount />} />
        </Route>
        <Route element={<TableLayout />}>
          <Route path={routesUrls.app.table} element={<Table />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
