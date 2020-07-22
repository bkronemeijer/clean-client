import { combineReducers } from "redux";
import household from "./household/reducer";
import user from "./user/reducer";
import task from "./task/reducer"

export default combineReducers({
  household,
  user,
  task
});
