import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { ObjectParams, Prio } from 'types';
import { SearchParams } from '../Board.type';

interface UseControlViewProps {
  params: SearchParams;
  setParams: (data: ObjectParams) => void;
  deleteParams: (field?: string | undefined) => void;
  setIsOpenFilter: Dispatch<SetStateAction<boolean>>;
}

interface UseControlView {
  handleHideSideboard: () => void;
  handleAddColumn: () => void;
  handleOpenFilter: () => void;
  handleCloseFilter: () => void;
  handleSearchByText: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSearchByPrio: (prio: Prio) => void;
}

export const useControlView = ({
  params,
  setParams,
  deleteParams,
  setIsOpenFilter
}: UseControlViewProps): UseControlView => {
  const handleHideSideboard = () => {
    deleteParams();
  };

  const handleAddColumn = () => {
    setParams({ target: 'column' });
  };

  const handleOpenFilter = () => {
    setIsOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setIsOpenFilter(false);
  };

  const handleSearchByText = (event: ChangeEvent<HTMLInputElement>) => {
    setParams({
      ...params,
      text: event?.target?.value
    });
  };

  const handleSearchByPrio = (prio: Prio) => {
    setParams({
      ...params,
      prio
    });
  };

  return {
    handleHideSideboard,
    handleAddColumn,
    handleOpenFilter,
    handleCloseFilter,
    handleSearchByText,
    handleSearchByPrio
  };
};
