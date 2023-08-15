export enum Filter {
  FOLDERS = 'folders',
  TABLES = 'tables'
}

interface UseFilterBy {
  filterByFolders: boolean;
  filterByTables: boolean;
}

export const useFilterBy = (filter: string): UseFilterBy => {
  const filterByFolders = filter === Filter.FOLDERS;
  const filterByTables = filter === Filter.TABLES;

  return {
    filterByFolders,
    filterByTables
  };
};
