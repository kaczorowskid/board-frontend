interface Data {
  id: string;
  name: string;
  description: string;
  tables_count: number;
}

export interface FolderProps {
  data: Data[];
  setFolderId: React.Dispatch<React.SetStateAction<string>>;
}
