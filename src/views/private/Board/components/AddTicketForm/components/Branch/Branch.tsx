import { Tooltip } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import { BranchProps } from './Branch.types';
import { StyledButton } from './Branch.styled';

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
      placement='bottomLeft'
    >
      <StyledButton>Create branch</StyledButton>
    </Tooltip>
  );
};
