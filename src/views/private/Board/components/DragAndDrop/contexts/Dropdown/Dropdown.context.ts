import React from 'react';
import { MenuProps } from 'antd';

interface DropdownContextProps {
  ticketDropdownItems: (id: string) => MenuProps['items'];
  columnDropdownItems: (id: string) => MenuProps['items'];
}

export const DropdownContext = React.createContext<DropdownContextProps>({
  ticketDropdownItems: () => [],
  columnDropdownItems: () => []
});
