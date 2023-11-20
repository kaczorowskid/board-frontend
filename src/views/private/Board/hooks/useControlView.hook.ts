import { ChangeEvent, useState } from 'react';
import { ObjectParams, Prio } from 'types';
import { useCustomSearchParams } from 'hooks';
import { SearchParams } from '../Board.type';

interface UseControlView {
  isOpenFilter: boolean;
  params: SearchParams;
  setParams: (data: ObjectParams) => void;
  handleHideSideboard: () => void;
  handleAddColumn: () => void;
  handleOpenFilter: () => void;
  handleCloseFilter: () => void;
  handleSearchByText: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSearchByPrio: (prio: Prio) => void;
}

export const useControlView = (): UseControlView => {
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  const { params, setParams, deleteParams } =
    useCustomSearchParams<SearchParams>();

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
    isOpenFilter,
    params,
    setParams,
    handleHideSideboard,
    handleAddColumn,
    handleOpenFilter,
    handleCloseFilter,
    handleSearchByText,
    handleSearchByPrio
  };
};
