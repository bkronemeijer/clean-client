import {apiUrl} from '../../config/constants'
import axios from 'axios'
import { Dispatch } from 'redux'
import { GetState } from '../StoreTypes/actionTypes'

export const householdWithUsersFetched = (payload: any) => ({
  type: "HOUSEHOLD_USERS_FETCHED",
  payload
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