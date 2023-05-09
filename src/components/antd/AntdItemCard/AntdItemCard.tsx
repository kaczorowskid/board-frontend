import { Card, CardProps, Divider, Tag } from 'antd';

interface AntdCardProps {
  ticketCode: CardProps['title'];
  ticketDescription: string;
  epics: string[];
}

export const AntdItemCard = ({ ticketCode, ticketDescription, epics, ...props }: AntdCardProps & CardProps) => (
  <Card title={ticketCode} {...props}>
    <span>{ticketDescription}</span>
    {epics && (
      <>
        <Divider />
        {epics?.map((epic) => (
          <Tag key={epic} color='red'>
            {epic}
          </Tag>
        ))}
      </>
    )}
  </Card>
);
