import { Alert, Space } from 'antd';
import { CalendarInfoProps } from './CalendarInfo.types';

export const CalendarInfo = ({ data }: CalendarInfoProps): JSX.Element => (
  <Space direction='vertical' size={10} style={{ width: '100%' }}>
    {data?.map(({ id, note, is_done: isDone }) => (
      <Alert
        key={id}
        type={isDone ? 'success' : 'info'}
        message={<span>{isDone ? <s>{note}</s> : <span>{note}</span>}</span>}
      />
    ))}
  </Space>
);
