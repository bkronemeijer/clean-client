// import { StoreState } from "../StoreTypes/actionTypes"

export const selectHouseholdWithUsers = (reduxState: any) => {
  return reduxState.household.household
}

export const selectHouseholdRecurrence = (reduxState: any) => {
  console.log("dit is de household selector", reduxState.household.household.recurrence)
  return reduxState.household.household.recurrence
}