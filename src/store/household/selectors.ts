export const selectHouseholdWithUsers = (reduxState: any) => {
  return reduxState.household.household
}

export const selectCurrentHousehold = (reduxState: any) => {
  return reduxState.household.household.nickName
}