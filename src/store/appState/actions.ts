import { DEFAULT_MESSAGE_TIMEOUT } from "../../config/constants";
import {
  AppActions,
  APP_LOADING,
  APP_DONE_LOADING,
  SET_MESSAGE,
  CLEAR_MESSAGE,
} from "../StoreTypes/actionTypes";

export const appLoading = (): AppActions => ({ type: APP_LOADING });
export const appDoneLoading = (): AppActions => ({
  type: APP_DONE_LOADING,
});
export const clearMessage = (): AppActions => ({
  type: CLEAR_MESSAGE,
});

export const setMessage = (
  variant: any,
  dismissable: boolean,
  text: string
) => {
  return {
    type: SET_MESSAGE,
    message: {
      variant,
      dismissable,
      text,
    },
  };
};

export const showMessageWithTimeout = (
  variant: string,
  dismissable: boolean,
  text: string,
  timeOutMilliSeconds: number
) => {
  return (dispatch: any) => {
    dispatch(setMessage(variant, dismissable, text));

    const timeout = timeOutMilliSeconds || DEFAULT_MESSAGE_TIMEOUT;
    setTimeout(() => dispatch(clearMessage()), timeout);
  };
};