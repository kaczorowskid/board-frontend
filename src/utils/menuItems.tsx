import { MenuProps } from 'components';
import {
  AppstoreOutlined,
  CalendarOutlined,
  FolderOutlined,
  TableOutlined
} from '@ant-design/icons';
import { routesUrls } from 'routes';

export const menuItems: MenuProps['items'] = [
  {
    name: 'Dashboard',
    icon: <AppstoreOutlined />,
    routing: routesUrls.app.dashboard
  },
  {
    name: 'Folders',
    icon: <FolderOutlined />,
    routing: routesUrls.app.folders
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
  }
];
