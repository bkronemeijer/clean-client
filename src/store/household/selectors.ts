// import { StoreState } from "../StoreTypes/actionTypes"

export const selectHouseholdWithUsers = (reduxState: any) => {
  return reduxState.household.household
}

export const selectCurrentHousehold = (reduxState: any) => {
  return reduxState.household.household.nickName
}

export const selectHouseholdRecurrence = (reduxState: any) => {
  return reduxState.household.household.recurrence
}