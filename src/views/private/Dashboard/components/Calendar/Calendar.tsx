import { Calendar as AntdCalendar } from 'antd';

export const Calendar = () => {
  const redBorderDates = ['2023-08-20', '2023-09-25', '2023-09-25'];

  const isRedBorderDate = (current: any) => {
    const dateString = current.format('YYYY-MM-DD');
    return redBorderDates.includes(dateString);
  };

  const cellRender = (current: any) => {
    const shouldShowRedBorder = isRedBorderDate(current);
    return <div className={shouldShowRedBorder ? 'bordered' : ''}></div>;
  };

  return (
    <AntdCalendar
      fullscreen={false}
      cellRender={cellRender}
      headerRender={() => null}
    />
  );
};
