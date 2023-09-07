import { useUserStore } from 'stores';
import { useState } from 'react';
import {
  AppstoreOutlined,
  FolderOutlined,
  TableOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { routesUrls } from 'utils';
import { Container } from './Menu.styled';
import { MenuItems, UserInfo } from './elements';

enum MenuElements {
  DASHBOARD = 'dashboard',
  FOLDERS = 'folders',
  BOARDS = 'boards'
}

export const Menu = () => {
  const navigation = useNavigate();
  const { name, email } = useUserStore();
  const [clickedElement, setClickedElement] = useState<MenuElements>(
    MenuElements.DASHBOARD
  );

  const menuData = [
    {
      name: 'Dashboard',
      onClick: () => {
        setClickedElement(MenuElements.DASHBOARD);
        navigation(routesUrls.app.dashboard);
      },
      isClicked: clickedElement === MenuElements.DASHBOARD,
      icon: <AppstoreOutlined />
    },
    {
      name: 'Folders',
      onClick: () => {
        setClickedElement(MenuElements.FOLDERS);
        navigation(routesUrls.app.folders);
      },
      isClicked: clickedElement === MenuElements.FOLDERS,
      icon: <FolderOutlined />
    },
    {
      name: 'Boards',
      onClick: () => {
        setClickedElement(MenuElements.BOARDS);
        navigation(routesUrls.app.boards);
      },
      isClicked: clickedElement === MenuElements.BOARDS,
      icon: <TableOutlined />
    }
  ];

  return (
    <Container>
      <UserInfo name={name} email={email} />
      <MenuItems data={menuData} />
    </Container>
  );
};
