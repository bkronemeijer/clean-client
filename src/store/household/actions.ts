import {apiUrl} from '../../config/constants'
import axios from 'axios'
import { Dispatch } from 'redux'
import { GetState } from '../StoreTypes/actionTypes'

export function fetchHouseholdWithUsers (householdId: number) {
  return async function thunk (dispatch: Dispatch, getState: GetState) {
    const fetchUrl = `${apiUrl}/household`

    const response = await axios.post(fetchUrl, {
      id: householdId
    })
  }
}