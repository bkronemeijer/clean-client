import { StoreState } from "../StoreTypes/actionTypes"

export const selectHouseholdWithUsers = (reduxState: any) => {
  return reduxState.household.household
}

export const selectToken = (reduxState: StoreState) => {
  return reduxState.user.token
}