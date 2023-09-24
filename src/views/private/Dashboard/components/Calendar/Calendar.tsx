import { DATE_FORMAT } from 'constants/timeFormat';
import { Calendar as AntdCalendar } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { CalendarProps } from './Calendar.types';
import { SignedCell } from './Calendar.styled';

export const Calendar = ({ data, setSelectedDate }: CalendarProps) => {
  const cellRender = (current: Dayjs) => {
    const dateString = current.format(DATE_FORMAT);
    const shouldSign = data?.find((date) =>
      dayjs(date.start_date).format(DATE_FORMAT).includes(dateString)
    );

    return shouldSign ? <SignedCell /> : null;
  };

  const handleSelectDate = (date: Dayjs) => {
    setSelectedDate(date.format(DATE_FORMAT));
  };

  return (
    <AntdCalendar
      fullscreen={false}
      cellRender={cellRender}
      onSelect={handleSelectDate}
      headerRender={() => null}
    />
  );
};
