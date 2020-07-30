import {apiUrl} from '../../config/constants'
import axios from 'axios'
import { Dispatch } from 'redux'
import { GetState, AppActions } from '../StoreTypes/actionTypes'
import {
  HOUSEHOLD_USERS_FETCHED
} from '../StoreTypes/actionTypes'
import { HouseholdWithUsers } from '../../Types/model'
import { setMessage } from '../appState/actions'

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
    if (!householdId) {
      return
    }

    const fetchUrl = `${apiUrl}/household`
    const token = localStorage.getItem("token")

    try {
      const response = await axios.post(fetchUrl, {
        id: householdId
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
      dispatch(householdWithUsersFetched(response.data))
      
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
    }


  }
}