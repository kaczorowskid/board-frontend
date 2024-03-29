import { MenuProps } from 'antd';
import { GetTicketResponse } from 'contracts/board.contracts';

export interface CommentsProps {
  data?: GetTicketResponse['comments'];
  commentsDropdownItems: (id: string) => MenuProps['items'];
  commentsDropdownIcon: JSX.Element;
}
