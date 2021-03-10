export const dateToQueryFormat = (date: Date, amt: number = 0): string => {
  let to: number = new Date(date).setDate(new Date(date).getDate() + amt);
  let res: string = new Date(to).toISOString().slice(0, 10);
  return res;
};

