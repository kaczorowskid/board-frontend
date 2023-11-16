import { Dispatch, SetStateAction } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { routesUrls } from 'routes';

interface UseControlViewProps {
  setBoardId: Dispatch<SetStateAction<string>>;
  setIsSidebarVisible: Dispatch<SetStateAction<boolean>>;
}

interface UseControlView {
  handleEdit: (id: string) => void;
  handleOpenBoard: (id: string) => void;
  handleCloseSidebar: () => void;
}

export const useControlView = ({
  setBoardId,
  setIsSidebarVisible
}: UseControlViewProps): UseControlView => {
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
    handleEdit,
    handleOpenBoard,
    handleCloseSidebar
  };
};
