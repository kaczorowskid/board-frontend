import {
  AppstoreOutlined,
  CalendarOutlined,
  TableOutlined,
  PoweroffOutlined
} from '@ant-design/icons';
import { routesUrls } from 'routes';
import { useTranslation } from 'react-i18next';
import { MenuItemProps } from '../elements';

export const useMenuItems = (logout: () => void): MenuItemProps['items'] => {
  const { t } = useTranslation();

  return [
    {
      name: t('private.dashboard.dashboard'),
      icon: <AppstoreOutlined />,
      routing: routesUrls.app.dashboard
    },
    {
      name: t('private.boards.boards'),
      icon: <TableOutlined />,
      routing: routesUrls.app.boards
    },
    {
      name: t('private.calendar.calendar'),
      icon: <CalendarOutlined />,
      routing: routesUrls.app.calendar
    },
    {
      name: t('private.logout'),
      icon: <PoweroffOutlined />,
      routing: routesUrls.auth.login,
      color: 'red',
      onClick: logout
    }
  ];
};
