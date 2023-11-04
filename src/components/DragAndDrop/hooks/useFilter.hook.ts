import { Column, Prio } from '../types';
import { filterBy } from '../utils';

export const useFilter = (
  columns: Column[] | undefined,
  filterValue: string,
  filterPrios: Prio
) => filterBy(columns, filterValue, filterPrios);
