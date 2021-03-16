import { SelectionsState, SelectionActionTypes, SET_NATIONALITY, SET_DATE } from "./types";

const getDefaultDate = (): Date => {
  const today = new Date();
  const yesterday = new Date(today);

  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday;
};

const initialState: SelectionsState = {
  selectedDate: getDefaultDate(),
  selectedNationality: "",
};

export const selectionReducer = (
  state: SelectionsState = initialState,
  action: SelectionActionTypes
): SelectionsState => {
  switch (action.type) {
    case SET_NATIONALITY:
      return {
        ...state,
        selectedNationality: action.payload,
      };
    case SET_DATE:
      return {
        ...state,
        selectedDate: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
