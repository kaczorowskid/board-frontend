import { Avatar } from 'antd';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { AntdDropdown } from 'components';
import { CommentsProps } from './Comments.types';
import {
  AvatarContainer,
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
}: CommentsProps) => (
  <Container>
    {data?.map(({ id, text, user }) => (
      <CommentWrapper>
        <AvatarContainer>
          <Avatar>{user?.first_name.at(0)?.toUpperCase()}</Avatar>
        </AvatarContainer>
        <AvatarInfoContainer>{user?.first_name}</AvatarInfoContainer>
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
