import {
  User,
  Household,
  Task,
  Message
} from '../../Types/model'

// USER ACTION TYPES
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"

// HOUSEHOLD ACTION TYPES
export const HOUSEHOLD_USERS_FETCHED = "HOUSEHOLD_USERS_FETCHED"

// TASK ACTION TYPES

// APPSTATE ACTION TYPES
export const APP_LOADING = "APP_LOADING"
export const APP_DONE_LOADING = "APP_DONE_LOADING"
export const SET_MESSAGE = "SET_MESSAGE"
export const CLEAR_MESSAGE = "CLEAR_MESSAGE"


export type StoreState = {
  users: User,
  households: Household,
  tasks: Task,
  // appState: Appstate
}

export type GetState = () => StoreState

export type appLoading = {
  type: typeof APP_LOADING
}
export type appDoneLoading = {
  type: typeof APP_DONE_LOADING
}
export type setMessage = {
  type: typeof SET_MESSAGE
  message: Message
}
export type clearMessage = {
  type: typeof CLEAR_MESSAGE
}

export type userLogin = {
  type: typeof LOGIN_SUCCESS
  payload: User
}

export type fetchHouseholdWithUser = {
  type: typeof HOUSEHOLD_USERS_FETCHED
  household: Household
}

export type TaskActionTypes = any
export type HouseholdActionTypes = any
export type UserActionTypes = userLogin

export type AppStateActionTypes =
  | appLoading
  | appDoneLoading
  | setMessage
  | clearMessage

export type AppActions =
  | TaskActionTypes
  | HouseholdActionTypes
  | UserActionTypes
  | AppStateActionTypes