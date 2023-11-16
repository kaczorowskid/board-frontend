import { DATE_ONLY_MONTH } from 'constants/timeFormat';
import { Dayjs } from 'dayjs';
import { Dispatch, SetStateAction } from 'react';
import { ObjectParams } from 'types';
import { SearchParams } from '../Calendar.types';

interface UseControlViewProps {
  params: SearchParams;
  setParams: (data: ObjectParams) => void;
  deleteParams: (field?: string | undefined) => void;
  setIsFormVisible: Dispatch<SetStateAction<boolean>>;
  setSelectedMonth: Dispatch<SetStateAction<string>>;
}

interface UseControlView {
  handleSelect: (date: Dayjs) => void;
  handleOpenForm: (id: string) => void;
  handleCloseForm: () => void;
  handleCloseNotes: () => void;
  handlePanelChange: (date: Dayjs) => void;
}

export const useControlView = ({
  params,
  setParams,
  deleteParams,
  setIsFormVisible,
  setSelectedMonth
}: UseControlViewProps): UseControlView => {
  const handleSelect = (date: Dayjs) => {
    setParams({ date: date.format('YYYY-MM-DD') });
  };

  const handleOpenForm = (id: string) => {
    setIsFormVisible(true);
    setParams({ ...params, id });
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
    deleteParams('id');
  };

  const handleCloseNotes = () => {
    deleteParams('date');
  };

  const handlePanelChange = (date: Dayjs) => {
    setSelectedMonth(date.format(DATE_ONLY_MONTH));
  };

  return {
    handleSelect,
    handleOpenForm,
    handleCloseForm,
    handleCloseNotes,
    handlePanelChange
  };
};
