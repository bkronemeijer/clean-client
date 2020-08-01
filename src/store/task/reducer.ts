import { TASKS_FETCHED, CURRENT_TASK_FETCHED, LOG_OUT } from "../StoreTypes/actionTypes";

const initialState = {
  tasks: null,
  currentTask: null
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case TASKS_FETCHED:
      return {
        ...state,
        tasks: action.payload
      }

    case CURRENT_TASK_FETCHED:
      if (action.payload.length === 0) {
        return {
          ...state,
          currentTask: []
        }
      }
      return {
        ...state,
        currentTask: action.payload[0]
      }

    case LOG_OUT:
      return initialState

    default:
      return state;
  }
};
