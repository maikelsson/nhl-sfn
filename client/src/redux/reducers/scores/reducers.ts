import { SelectionsState, SelectionActionTypes, SET_NATIONALITY, SET_DATE } from "./types";

const initialState: SelectionsState = {
  selectedDate: new Date(),
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
