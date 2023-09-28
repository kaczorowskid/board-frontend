import { FormInstance } from 'antd';
import { useEffect } from 'react';

export const useFillForm = <T extends unknown>(
  data: T,
  form: FormInstance,
  isSidebarVisible: boolean,
  isEdit: boolean
) => {
  useEffect(() => {
    if (!isEdit) {
      form.resetFields();
    } else {
      form.setFieldsValue(data);
    }
  }, [isSidebarVisible, data]);
};
