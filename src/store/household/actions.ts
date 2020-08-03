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

export function updateHousehold (householdId: number, name: string, startDate: string | number, recurrence: string | number) {
  return async function thunk (dispatch: Dispatch, getState: GetState) {
    if (!householdId) {
      return
    }
    
    const patchUrl = `${apiUrl}/household`
    const token = localStorage.getItem("token")
    
    if (recurrence === "weekly") {
      recurrence = 7
    } else if (recurrence === "biweekly") {
      recurrence = 14
    }
    
    if (startDate === "monday") {
      startDate = 1
    } else if (startDate === "tuesday") {
      startDate = 2
    } else if (startDate === "wednesday") {
      startDate = 3
    } else if (startDate === "thursday") {
      startDate = 4
    } else if (startDate === "friday") {
      startDate = 5
    } else if (startDate === "saturday") {
      startDate = 6
    } else if (startDate === "sunday") {
      startDate = 7
    }
    try {
      const response = await axios.patch(patchUrl, {
        id: householdId,
        name,
        startDate,
        recurrence
      },{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

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