import { Form, Input, Select } from 'antd';
import { AntdDrawer } from 'components';
import { useTranslation } from 'react-i18next';
import { useForm } from 'antd/es/form/Form';
import { useCustomSearchParams, useFillForm } from 'hooks';
import { SearchParams } from '../../Board.type';
import { priosOptions } from './Filter.schema';
import { FilterProps } from './Filter.type';
import { FilterInputs } from './Filter.enum';

export const Filter = ({
  isSidebarVisible,
  onCloseSidebar,
  onSearch,
  onChangePrios
}: FilterProps) => {
  const { t } = useTranslation();
  const [form] = useForm();

  const { params } = useCustomSearchParams<SearchParams>();

  useFillForm(params, form, isSidebarVisible, true);

  return (
    <AntdDrawer
      hideSubmit
      open={isSidebarVisible}
      onClose={onCloseSidebar}
      title='Filter'
    >
      <Form form={form} layout='vertical'>
        <Form.Item
          name={FilterInputs.TEXT}
          label={t('private.board.search-by-title')}
        >
          <Input
            allowClear
            placeholder={t('private.board.title')}
            onChange={onSearch}
          />
        </Form.Item>
        <Form.Item
          name={FilterInputs.SELECT}
          label={t('private.board.search-by-prio')}
        >
          <Select
            allowClear
            placeholder={t('private.board.priority')}
            options={priosOptions}
            onChange={(value, options) => {
              if (value === undefined) {
                onChangePrios?.('', options);
              } else {
                onChangePrios?.(value, options);
              }
            }}
          />
        </Form.Item>
      </Form>
    </AntdDrawer>
  );
};
