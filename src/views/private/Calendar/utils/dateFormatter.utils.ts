import { DATE_ONLY_MONTH } from 'constants/timeFormat';
import { Dayjs } from 'dayjs';

interface DateFormatter {
  startDate: string;
  endDate: string;
}

export const dateFormatter = (date: Dayjs): DateFormatter => ({
  startDate: date.format(DATE_ONLY_MONTH),
  endDate: date.add(1, 'month').format(DATE_ONLY_MONTH)
});
