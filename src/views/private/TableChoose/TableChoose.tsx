import { TablesPreview } from 'components';
import { useListQuery, usePaginationHelpers } from 'hooks';
import { useTables } from './TableChoose.hook';

export const TableChoose = () => {
  const { listQuery, setListQuery } = useListQuery();
  const { onChangePaginationInfinite } = usePaginationHelpers(listQuery, setListQuery);

  const { data: tablesData } = useTables(listQuery);

  return (
    <>
      <TablesPreview
        data={tablesData?.data || []}
        onChangePagination={onChangePaginationInfinite}
        height={200}
        itemHeight={70}
        itemKey='name'
      />
    </>
  );
};
