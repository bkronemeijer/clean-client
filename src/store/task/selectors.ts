import { StoreState } from "../StoreTypes/actionTypes";

export const selectTasks = (reduxState: StoreState) => {
  return reduxState.task
}