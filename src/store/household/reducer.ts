import { LOG_OUT } from "../StoreTypes/actionTypes";

const initialState = {
  loading: false,
  household: {}
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "HOUSEHOLD_USERS_FETCHED" :
      return {
        ...state,
        household: action.payload
      }

    case LOG_OUT:
      return initialState
    
    default:
      return state;
  }
};
