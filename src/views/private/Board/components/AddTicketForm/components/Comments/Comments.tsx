import { Avatar } from 'antd';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { AntdDropdown } from 'components';
import dayjs from 'dayjs';
import { CommentsProps } from './Comments.types';
import {
  AvatarContainer,
  AvatarDateContainer,
  AvatarInfoContainer,
  CommentContainer,
  CommentWrapper,
  Container,
  DropdownContainer
} from './Comments.styled';

export const Comments = ({
  data,
  commentsDropdownItems,
  commentsDropdownIcon
}: CommentsProps): JSX.Element => (
  <Container>
    {data?.map(({ id, text, created_at, user }) => (
      <CommentWrapper>
        <AvatarContainer>
          <Avatar>
            {user?.first_name?.at(0)?.toUpperCase()}&nbsp;
            {user?.last_name?.at(0)?.toUpperCase()}
          </Avatar>
        </AvatarContainer>
        <AvatarInfoContainer>
          {user?.first_name}&nbsp;{user?.last_name}
        </AvatarInfoContainer>
        <AvatarDateContainer>
          {dayjs(created_at).format('HH:mm DD.MM.YYYY')}
        </AvatarDateContainer>
        <CommentContainer>
          <div>
            <Markdown rehypePlugins={[rehypeRaw]}>{text}</Markdown>
          </div>
          <DropdownContainer>
            <AntdDropdown menu={{ items: commentsDropdownItems(id) }}>
              {commentsDropdownIcon}
            </AntdDropdown>
          </DropdownContainer>
        </CommentContainer>
      </CommentWrapper>
    ))}
  </Container>
);
