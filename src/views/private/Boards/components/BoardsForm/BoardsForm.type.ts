import { CommonFormProps } from 'types';
import { CreateBoardRequest } from 'board-contracts';
import { BoardsFormInputs } from './BoardForm.enum';

export interface BoardsFormProps extends CommonFormProps {
  id: string;
}

export interface BoardFormType {
  [BoardsFormInputs.TITLE]: CreateBoardRequest['title'];
  [BoardsFormInputs.DESCRIPTION]: CreateBoardRequest['description'];
}
