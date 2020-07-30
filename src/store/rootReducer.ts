import { combineReducers } from "redux";
import household from "./household/reducer";
import user from "./user/reducer";
import task from "./task/reducer"
import appState from "./appState/reducer"

export default combineReducers({
  household,
  user,
  task,
  appState
});
