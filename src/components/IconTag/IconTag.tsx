import { Tag } from 'antd';
import { IconTagProps } from './IconTag.types';
import { colorMapper, iconMapper, nameMapper } from './IconTag.utils';
import { Container } from './IconTag.style';

export const IconTag = ({ prio }: IconTagProps): JSX.Element => (
  <Tag color={colorMapper[prio]}>
    <Container>
      {iconMapper[prio]}
      {nameMapper[prio]}
    </Container>
  </Tag>
);
