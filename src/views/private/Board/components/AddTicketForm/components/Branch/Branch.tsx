import { Button, Tooltip } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import { BranchProps } from './Branch.types';

export const Branch = ({ data }: BranchProps) => {
  const branch = data?.title.split(' ').join('-');

  const tooltipStyle = {
    whiteSpace: 'nowrap'
  } as any;

  const overlay = {
    maxWidth: '100%'
  };

  return (
    <Tooltip
      overlayStyle={overlay}
      overlayInnerStyle={tooltipStyle}
      trigger={['click']}
      title={
        <Paragraph style={{ margin: 0, padding: 0 }} copyable>
          {branch}
        </Paragraph>
      }
      placement='right'
    >
      <Button size='small'>Create branch</Button>
    </Tooltip>
  );
};
