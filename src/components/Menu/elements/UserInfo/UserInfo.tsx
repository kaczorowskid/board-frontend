import { Avatar } from 'antd';
import { Container, Email, InfoContainer, Name } from './UserInfo.styled';
import { UserInfoProps } from './UserInfo.type';

export const UserInfo = ({
  firstName,
  lastName,
  email,
  onClick
}: UserInfoProps): JSX.Element => (
  <Container onClick={onClick}>
    <Avatar size={64} style={{ backgroundColor: 'gray' }}>
      {firstName?.at(0)?.toUpperCase()}
      {lastName?.at(0)?.toUpperCase()}
    </Avatar>
    <InfoContainer>
      <Name>{firstName}</Name>
      <Name>{lastName}</Name>
      <Email>{email}</Email>
    </InfoContainer>
  </Container>
);
