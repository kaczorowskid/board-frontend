import { FolderFilled, PlusCircleOutlined } from '@ant-design/icons';
import {
  Container,
  IconContainer,
  InfoContainer,
  TagContainer,
  Title,
  TitleContainer
} from './Folder.styled';
import { FolderProps } from './Folder.type';

export const Folder = ({ data, setFolderId }: FolderProps) => (
  <>
    <Container onClick={() => setFolderId('')}>
      <IconContainer>
        <PlusCircleOutlined style={{ fontSize: 60 }} />
      </IconContainer>
    </Container>
    {(data || []).map(
      ({ id, name, description, tables_count: tablesCount }) => (
        <Container key={id} onClick={() => setFolderId(id)}>
          <TitleContainer>
            <FolderFilled style={{ fontSize: '50px', color: '#ad9cde' }} />
            <Title>{name}</Title>
          </TitleContainer>
          <InfoContainer>{tablesCount} Tables</InfoContainer>
          <TagContainer>{description}</TagContainer>
        </Container>
      )
    )}
  </>
);
