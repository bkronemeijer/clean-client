import {apiUrl} from '../../config/constants'
import axios from 'axios'
import { Dispatch } from 'redux'
import { GetState, AppActions } from '../StoreTypes/actionTypes'
import {
  HOUSEHOLD_USERS_FETCHED
} from '../StoreTypes/actionTypes'
import { HouseholdWithUsers } from '../../Types/model'

// export const householdWithUsersFetched = (payload: any) => ({
//   type: HOUSEHOLD_USERS_FETCHED,
//   payload
// })


export const householdWithUsersFetched = (householdWithUsers: HouseholdWithUsers): AppActions => ({
  type: HOUSEHOLD_USERS_FETCHED,
  payload: householdWithUsers
})

export function fetchHouseholdWithUsers (householdId: number) {
  return async function thunk (dispatch: Dispatch, getState: GetState) {
    const fetchUrl = `${apiUrl}/household`

    const response = await axios.post(fetchUrl, {
      id: householdId
    })
    // auth headers moeten nog worden toegevoegd

    dispatch(householdWithUsersFetched(response.data))

    console.log("hoi dit is een response", response)
  }
}