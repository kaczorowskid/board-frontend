import { message } from 'antd';
import { AntdMessageProps } from './AntdMessage.type';

export const antdMessage = ({
  type,
  content,
  duration = 3
}: AntdMessageProps) => {
  message.open({
    type,
    content,
    duration
  });
};
