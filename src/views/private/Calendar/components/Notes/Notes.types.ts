import { MenuProps } from 'antd';
import { CommonFormProps } from 'types';

export interface NotesProps extends CommonFormProps {
  date: string | null;
  userId: string;
  openForm: (id: string) => void;
  noteDropdownItems: (id: string) => MenuProps['items'];
  noteDropdownIcon: JSX.Element;
}
