const dateDisplayOptions: Intl.DateTimeFormatOptions = { weekday: "long", day: "numeric", month: "short" };

export const dateToQueryFormat = (date: Date, amt: number = 0): string => {
  let to: number = new Date(date).setDate(new Date(date).getDate() + amt);
  let res: string = new Date(to).toISOString().slice(0, 10);
  return res;
};

export const dateToDisplayFormat = (date: Date, amount: number): string => {
  let newDate: Date = new Date(date);
  newDate.setDate(date.getDate() + amount);
  let result: string = newDate.toLocaleDateString("en-us", dateDisplayOptions);
  return result;
};
