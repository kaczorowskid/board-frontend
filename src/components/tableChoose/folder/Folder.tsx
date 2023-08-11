import { FolderFilled } from '@ant-design/icons';
import { Container, InfoContainer, TagContainer, Title, TitleContainer } from './Folder.styled';
import { FolderProps } from './Folder.type';

export const Folder = ({ data, setFolderId }: FolderProps) => (
  <>
    {data.map(({ id, name, description, tables_count: tablesCount }) => (
      <Container onClick={() => setFolderId(id)}>
        <TitleContainer>
          <FolderFilled style={{ fontSize: '50px', color: '#ad9cde' }} />
          <Title>{name}</Title>
        </TitleContainer>
        <InfoContainer>{tablesCount} Tables</InfoContainer>
        <TagContainer>{description}</TagContainer>
      </Container>
    ))}
  </>
);
