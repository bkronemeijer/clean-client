import { StoreState } from "../StoreTypes/actionTypes";

export const selectTasks = (reduxState: StoreState) => {
  return reduxState.task.tasks
}

export const selectCurrentTasks = (reduxState: StoreState) => {
  return reduxState.task.currentTasks
}

export const selectCurrentTask = (reduxState: StoreState) => {
  return reduxState.task.currentTask
}

// export const selectCurrentTaskId = (reduxState: StoreState) => {
//   return reduxState.task.currentTask.id
// }