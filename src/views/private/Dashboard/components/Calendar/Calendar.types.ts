export interface CalendarProps {
  data?: {
    id: string;
    start_date: string;
    hour: string;
    note: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
  }[];
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}
