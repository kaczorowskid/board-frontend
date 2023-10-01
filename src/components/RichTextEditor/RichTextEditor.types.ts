import { ReactQuillProps } from 'react-quill';

export interface RichTextEditrorProps extends ReactQuillProps {
  isFocus: boolean;
  setIsFocus: () => void;
}
