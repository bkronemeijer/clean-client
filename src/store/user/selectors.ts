import { StoreState } from "../StoreTypes/actionTypes"

export const selectHouseholdWithUsers = (reduxState: any) => {
  return reduxState.household.household
}

export const selectToken = (reduxState: StoreState) => {
  return reduxState.user.token
}

export const selectLoggedInName = (reduxState: StoreState) => {
  return reduxState.user.name
}

export const selectUserHouseholdId = (reduxState: StoreState) => {
  return reduxState.user.householdId
}

export const selectLoginSuccess = (reduxState: StoreState) => {
  console.log('hi from selector', reduxState.user.loginSuccess, reduxState.user)
  return reduxState.user
}