import { SelectionActionTypes, SET_DATE, SET_NATIONALITY } from "./types";

export const setNationality = (selection: string): SelectionActionTypes => {
  return {
    type: SET_NATIONALITY,
    payload: selection,
  };
};

export const setPreviousDay = (date: Date): SelectionActionTypes => {
  const prevDay: Date = setNewDate(date, -1);
  return {
    type: SET_DATE,
    payload: prevDay,
  };
};

export const setNextDay = (date: Date): SelectionActionTypes => {
  const nextDay: Date = setNewDate(date, 1);
  return {
    type: SET_DATE,
    payload: nextDay,
  };
};

const setNewDate = (date: Date, amt: number): Date => {
  let dateInMs: number = new Date(date).setDate(new Date(date).getDate() + amt);
  return new Date(dateInMs);
};
