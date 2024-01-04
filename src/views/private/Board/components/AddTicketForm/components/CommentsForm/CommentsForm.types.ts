import { CreateCommentRequest } from 'board-contracts';
import { CommentsFormInputs } from './CommentsForm.enum';

export interface CommentsFormProps {
  ticketId: string;
  userId: string;
}

export interface AddTicketFormType {
  [CommentsFormInputs.TEXT]: CreateCommentRequest['text'];
}
