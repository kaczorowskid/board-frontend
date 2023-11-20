import { Dispatch, SetStateAction, useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { routesUrls } from 'routes';

interface UseControlView {
  isSidebarVisible: boolean;
  boardId: string;
  setIsSidebarVisible: Dispatch<SetStateAction<boolean>>;
  handleEdit: (id: string) => void;
  handleOpenBoard: (id: string) => void;
  handleCloseSidebar: () => void;
}

export const useControlView = (): UseControlView => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const [boardId, setBoardId] = useState<string>('');

  const navigate = useNavigate();

  const handleEdit = (id: string) => {
    setBoardId(id);
    setIsSidebarVisible(true);
  };

  const handleOpenBoard = (id: string) => {
    navigate(generatePath(routesUrls.app.board, { boardId: id }));
  };

  const handleCloseSidebar = () => {
    setIsSidebarVisible(false);
    setBoardId('');
  };

  return {
    isSidebarVisible,
    boardId,
    setIsSidebarVisible,
    handleEdit,
    handleOpenBoard,
    handleCloseSidebar
  };
};
