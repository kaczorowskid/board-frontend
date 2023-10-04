import { Dispatch, SetStateAction } from 'react';
import { ShareBoardFormInputs } from './ShareBoardForm.enum';

export interface ShareBoardFormProps {
  isFormVisible: boolean;
  setIsFormVisible: Dispatch<SetStateAction<boolean>>;
}

export interface ShareBoardFormType {
  [ShareBoardFormInputs.TOKEN]: string;
}
