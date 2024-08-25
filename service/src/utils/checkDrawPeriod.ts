export const checkDrawPeriod = (
  startDate: string,
  endDate: string,
  drawStartTime: string,
  drawEndTime: string,
  today: Date
): boolean => {
  const startPeriod = new Date(startDate);
  const endPeriod = new Date(endDate);
  const drawStartDateTime = new Date(today);

  const [startHour, startMinute] = drawStartTime.split(':').map(Number);
  drawStartDateTime.setHours(startHour, startMinute, 0, 0);

  const drawEndDateTime = new Date(today);
  const [endHour, endMinute] = drawEndTime.split(':').map(Number);
  drawEndDateTime.setHours(endHour, endMinute, 0, 0);

  return (
    today >= startPeriod &&
    today <= endPeriod &&
    today >= drawStartDateTime &&
    today <= drawEndDateTime
  );
};
