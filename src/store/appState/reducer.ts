import {
  APP_LOADING,
  APP_DONE_LOADING,
  SET_MESSAGE,
  CLEAR_MESSAGE,
  AppStateActionTypes
} from "../StoreTypes/actionTypes";

const initialState = {
  loading: false,
  message: null
};


export default (state = initialState, action: AppStateActionTypes) => {
  switch (action.type) {
    case APP_LOADING:
      return { ...state, loading: true };

    case APP_DONE_LOADING:
      return { ...state, loading: false };

    case SET_MESSAGE:
      console.log(action.message);
      return { ...state, message: { ...action.message } };

    case CLEAR_MESSAGE:
      return { ...state, message: null };

    default:
      return state;
  }
};