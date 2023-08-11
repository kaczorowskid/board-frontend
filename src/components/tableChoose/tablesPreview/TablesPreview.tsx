import { Avatar, List } from 'antd';
import VirtualList from 'rc-virtual-list';
import { useEffect, useState } from 'react';
import { TablesPreviewProps, TablesPreviewType } from './TablesPreview.type';

export const TablesPreview = ({ data, onChangePagination, itemHeight, height, ...props }: TablesPreviewProps) => {
  const [dataSource, setDataSource] = useState<TablesPreviewType[]>([]);

  useEffect(() => {
    setDataSource((prev) => [...prev, ...data]);
  }, [data]);

  const handleScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === height) {
      onChangePagination();
    }
  };

  return (
    <List>
      <VirtualList data={dataSource} onScroll={handleScroll} itemHeight={itemHeight} height={height} {...props}>
        {({ image, name }) => (
          <List.Item key={name}>
            <List.Item.Meta
              avatar={<Avatar src={image} shape='square' size={(itemHeight as number) - 10} />}
              title={name}
            />
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};
