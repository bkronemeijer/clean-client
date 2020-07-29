import { TASKS_FETCHED, LOG_OUT } from "../StoreTypes/actionTypes";

const initialState = null

export default (state = initialState, action: any) => {
  switch (action.type) {
    case TASKS_FETCHED:
      return action.payload

    case LOG_OUT:
      return initialState

    default:
      return state;
  }
};
