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

export const selectUserIsAdmin = (reduxState: StoreState) => {
  return reduxState.user.isAdmin
}


export const selectLoggedInUserId = (reduxState: StoreState) => {
  return reduxState.user.id
}

export const selectUserHouseholdId = (reduxState: StoreState) => {
  return reduxState.user.householdId
}

export const selectLoginSuccess = (reduxState: StoreState) => {
  return reduxState.user
}

