import {
  AppstoreOutlined,
  CalendarOutlined,
  TableOutlined,
  PoweroffOutlined
} from '@ant-design/icons';
import { routesUrls } from 'routes';
import { MenuItemProps } from '../elements';

export const useMenuItems = (logout: () => void): MenuItemProps['items'] => [
  {
    name: 'Dashboard',
    icon: <AppstoreOutlined />,
    routing: routesUrls.app.dashboard
  },
  {
    name: 'Boards',
    icon: <TableOutlined />,
    routing: routesUrls.app.boards
  },
  {
    name: 'Calendar',
    icon: <CalendarOutlined />,
    routing: routesUrls.app.calendar
  },
  {
    name: 'Loguot',
    icon: <PoweroffOutlined />,
    routing: routesUrls.auth.login,
    color: 'red',
    onClick: logout
  }
];
