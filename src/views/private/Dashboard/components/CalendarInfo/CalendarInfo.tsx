import { Alert, Space } from 'antd';
import { CalendarInfoProps } from './CalendarInfo.types';

export const CalendarInfo = ({ data }: CalendarInfoProps) => (
  <Space direction='vertical' size={24} style={{ width: '100%' }}>
    {data?.map(({ note, hour }) => (
      <Alert
        message={
          <span>
            <strong>{hour}</strong>
            <span>&nbsp;-&nbsp;</span>
            <span>{note}</span>
          </span>
        }
      />
    ))}
  </Space>
);
