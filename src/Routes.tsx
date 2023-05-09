import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { PublicLayout } from 'layouts';
import { routesUrls } from 'utils';
import { ConfirmAccount, Login, Register, ResetPassword, SetNewPassword } from 'views';
import { Drag } from 'Drag';

export const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<PublicLayout />}>
          <Route path={routesUrls.auth.login} element={<Login />} />
          <Route path={routesUrls.auth.register} element={<Register />} />
          <Route path={routesUrls.auth.resetPassword} element={<ResetPassword />} />
          <Route path={routesUrls.auth.setNewPassword} element={<SetNewPassword />} />
          <Route path={routesUrls.auth.confirmAccount} element={<ConfirmAccount />} />
        </Route>
        <Route path='/drag' element={<Drag />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
