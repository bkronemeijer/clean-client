import { StoreState } from "../StoreTypes/actionTypes";

export const selectAppLoading = (reduxState: StoreState) => reduxState.appState.loading;
export const selectMessage = (reduxState: StoreState) => reduxState.appState.message;
