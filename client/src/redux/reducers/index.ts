import { combineReducers } from "redux";
import { selectionReducer } from "./scores/reducers";

export default combineReducers({
  selections: selectionReducer,
});
