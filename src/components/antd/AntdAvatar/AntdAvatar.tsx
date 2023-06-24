import { Avatar } from 'antd';
import { AntdAvatarProps } from './AntdAvatar.types';

export const AntdAvatar = ({ color, ...props }: AntdAvatarProps) => <Avatar style={{ color }} {...props} />;
