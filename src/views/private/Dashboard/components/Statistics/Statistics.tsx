import EChartsReact from 'echarts-for-react';
import { Container } from './Statistics.styled';
import { StatisticsProps } from './Statistics.types';

export const Statistics = ({
  notMerge,
  lazyUpdate,
  ...props
}: StatisticsProps) => (
  <Container>
    <EChartsReact notMerge={true} lazyUpdate={true} {...props} />
  </Container>
);
