import { MenuProps } from 'antd';
import { GetTicketResponse } from 'api';

export interface CommentsProps {
  data?: GetTicketResponse['comments'];
  commentsDropdownItems: (id: string) => MenuProps['items'];
  commentsDropdownIcon: JSX.Element;
}
