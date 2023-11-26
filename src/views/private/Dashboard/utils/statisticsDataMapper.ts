export const statisticsDataMapper = (
  boards?: number,
  tickets?: number
): Record<string, any> => ({
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: 'Count',
      type: 'pie',
      radius: '70%',
      data: [
        { value: boards || 0, name: 'Boards' },
        { value: tickets || 0, name: 'Tickets' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
});
