import { Avatar } from 'antd';
import { Container, Email, InfoContainer, Name } from './UserInfo.styled';
import { UserInfoProps } from './UserInfo.type';

export const UserInfo = ({ name, email }: UserInfoProps) => (
  <Container>
    <Avatar size={64} style={{ backgroundColor: 'gray' }}>
      {name.at(0)?.toUpperCase()}
    </Avatar>
    <InfoContainer>
      <Name>{name}</Name>
      <Email>{email}</Email>
    </InfoContainer>
  </Container>
);
