import { TASKS_FETCHED } from "../StoreTypes/actionTypes";

const initialState = null

export default (state = initialState, action: any) => {
  switch (action.type) {
    case TASKS_FETCHED:
      return action.payload

    default:
      return state;
  }
};
