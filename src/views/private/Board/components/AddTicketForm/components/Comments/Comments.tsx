import { Avatar, Dropdown } from 'antd';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
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
          <Avatar>{user?.name.at(0)?.toUpperCase()}</Avatar>
        </AvatarContainer>
        <AvatarInfoContainer>{user?.name}</AvatarInfoContainer>
        <CommentContainer>
          <Markdown rehypePlugins={[rehypeRaw]}>{text}</Markdown>
          <DropdownContainer>
            <Dropdown
              menu={{ items: commentsDropdownItems(id) }}
              trigger={['click']}
            >
              {commentsDropdownIcon}
            </Dropdown>
          </DropdownContainer>
        </CommentContainer>
      </CommentWrapper>
    ))}
  </Container>
);
