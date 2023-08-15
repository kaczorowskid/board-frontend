export interface MenuItem {
  isClicked?: boolean;
  name: string;
  icon?: JSX.Element;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export interface MenuItemProps {
  data: MenuItem[];
}
