import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { PublicLayout } from 'layouts';
import { routesUrls } from 'utils';
import { Login, Register, ResetPassword } from 'views';

export const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<PublicLayout />}>
          <Route path={routesUrls.auth.login} element={<Login />} />
          <Route path={routesUrls.auth.register} element={<Register />} />
          <Route path={routesUrls.auth.resetPassword} element={<ResetPassword />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
