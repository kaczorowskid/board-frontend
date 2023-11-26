import ReactQuill from 'react-quill';
import { Container } from './RichTextEditor.styled';
import { RichTextEditrorProps } from './RichTextEditor.types';

export const RichTextEditor = ({
  isFocus,
  setIsFocus,
  placeholder,
  ...props
}: RichTextEditrorProps): JSX.Element =>
  isFocus ? (
    <ReactQuill placeholder={placeholder} {...props} />
  ) : (
    <Container onClick={setIsFocus}>{placeholder}</Container>
  );
