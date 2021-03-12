export interface SelectedDate {
  date: Date;
}

export interface SelectedNationality {
  selection: string;
}

export interface SelectionsState {
  selectedDate: Date;
  selectedNationality: string;
}

export const SET_NATIONALITY = "SET_NATIONALITY";
export const SET_DATE = "SET_DATE";

interface SetSelectedNationalityAction {
  type: typeof SET_NATIONALITY;
  payload: string;
}

interface SetSelectedDateAction {
  type: typeof SET_DATE;
  payload: Date;
}
export type SelectionActionTypes = SetSelectedNationalityAction | SetSelectedDateAction;
