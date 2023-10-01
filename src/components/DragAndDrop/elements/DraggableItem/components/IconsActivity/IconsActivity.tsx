import { FiAlignJustify, FiMessageCircle } from 'react-icons/fi';
import { IconsActivityProps } from './IconsActivity.types';
import { Container } from './IconsActivity.styyled';

export const IconsActivity = ({
  description,
  comments
}: IconsActivityProps) => (
  <Container hasGap>
    {description && <FiAlignJustify />}
    {comments ? (
      <Container>
        <FiMessageCircle /> {comments}
      </Container>
    ) : null}
  </Container>
);
