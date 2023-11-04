import { Column, Prio } from 'components/DragAndDrop/types';

const filterByText = (value: string, searchText: string) => {
  if (!searchText) {
    return value;
  }
  return value.trim().toLowerCase().includes(searchText?.trim()?.toLowerCase());
};

const filterByPrio = (value: string, searchPrio: Prio) => value === searchPrio;

export const filterBy = (
  columns: Column[] | undefined,
  filterValue: string,
  filteredPrios: Prio
) => {
  if (!filteredPrios && !filterValue) {
    return columns;
  }

  return columns?.map((column) => ({
    ...column,
    tickets: column.tickets.filter((ticket) => {
      if (filteredPrios) {
        return (
          filterByText(ticket.title, filterValue) &&
          filterByPrio(ticket.prio, filteredPrios)
        );
      }
      return filterByText(ticket.title, filterValue);
    })
  }));
};
