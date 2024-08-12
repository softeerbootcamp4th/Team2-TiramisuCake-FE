export const getWeekDay = (eventdate: string) => {
  const date = new Date(eventdate);

  const daysOfWeek = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];

  const dayIndex = date.getDay();

  return daysOfWeek[dayIndex];
};
