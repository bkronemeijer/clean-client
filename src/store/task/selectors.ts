import { StoreState } from "../StoreTypes/actionTypes";

export const selectTasks = (reduxState: StoreState) => {
  return reduxState.task.tasks
}

export const selectCurrentTask = (reduxState: StoreState) => {
  return reduxState.task.currentTask
}

// export const selectCurrentTaskId = (reduxState: StoreState) => {
//   return reduxState.task.currentTask.id
// }