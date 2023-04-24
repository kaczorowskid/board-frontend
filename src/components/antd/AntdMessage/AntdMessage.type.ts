import { MessageType } from './AntdMessage.enum';

export interface AntdMessageProps {
  type: MessageType;
  content: string;
  duration?: number;
}
