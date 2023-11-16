import { Prio } from 'types';

export interface SearchParams {
  target: 'ticket' | 'column';
  ticketId?: string;
  columnId?: string;
  text?: string;
  prio?: Prio;
}
