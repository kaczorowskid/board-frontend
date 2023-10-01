export interface UseColumn<T = never> {
  record: T;
  onEdit: (id: string) => void;
  onDelete: (id: { id: string }) => void;
}
