import { DATE_ONLY_MONTH } from 'constants/timeFormat';
import dayjs, { Dayjs } from 'dayjs';
import { Dispatch, SetStateAction, useState } from 'react';
import { useCustomSearchParams } from 'hooks';
import { SearchParams } from '../Calendar.types';

interface UseControlView {
  params: SearchParams;
  isFormVisible: boolean;
  selectedMonth: string;
  setSelectedMonth: Dispatch<SetStateAction<string>>;
  handleSelect: (date: Dayjs) => void;
  handleOpenForm: (id: string) => void;
  handleCloseForm: () => void;
  handleCloseNotes: () => void;
  handlePanelChange: (date: Dayjs) => void;
}

export const useControlView = (): UseControlView => {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

  const { params, setParams, deleteParams } =
    useCustomSearchParams<SearchParams>();

  const [selectedMonth, setSelectedMonth] = useState(
    dayjs().format(DATE_ONLY_MONTH)
  );

  const handleSelect = (date: Dayjs): void => {
    setParams({ date: date.format('YYYY-MM-DD') });
  };

  const handleOpenForm = (id: string): void => {
    setIsFormVisible(true);
    setParams({ ...params, id });
  };

  const handleCloseForm = (): void => {
    setIsFormVisible(false);
    deleteParams('id');
  };

  const handleCloseNotes = (): void => {
    deleteParams('date');
  };

  const handlePanelChange = (date: Dayjs): void => {
    setSelectedMonth(date.format(DATE_ONLY_MONTH));
  };

  return {
    params,
    isFormVisible,
    selectedMonth,
    setSelectedMonth,
    handleSelect,
    handleOpenForm,
    handleCloseForm,
    handleCloseNotes,
    handlePanelChange
  };
};
