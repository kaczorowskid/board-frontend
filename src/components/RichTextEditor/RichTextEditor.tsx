import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Container } from './RichTextEditor.styled';
import { RichTextEditrorProps } from './RichTextEditor.types';

export const RichTextEditor = ({
  isFocus,
  setIsFocus,
  placeholder,
  ...props
}: RichTextEditrorProps) =>
  isFocus ? (
    <ReactQuill placeholder={placeholder} {...props} />
  ) : (
    <Container onClick={setIsFocus}>{placeholder}</Container>
  );
