import { Dispatch, SetStateAction } from 'react';
import { ConfirmShareTokenRequest } from 'board-contracts';
import { ShareBoardFormInputs } from './ShareBoardForm.enum';

export interface ShareBoardFormProps {
  isFormVisible: boolean;
  setIsFormVisible: Dispatch<SetStateAction<boolean>>;
}

export interface ShareBoardFormType {
  [ShareBoardFormInputs.TOKEN]: ConfirmShareTokenRequest['token'];
}
