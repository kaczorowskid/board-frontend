import { DATE_ONLY_MONTH } from 'constants/timeFormat';
import { Dayjs } from 'dayjs';

export const dateFormatter = (date: Dayjs) => ({
  startDate: date.format(DATE_ONLY_MONTH),
  endDate: date.add(1, 'month').format(DATE_ONLY_MONTH)
});
