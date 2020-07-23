import {apiUrl} from '../../config/constants'
import axios from 'axios'
import { Dispatch } from 'redux'
import { GetState } from '../StoreTypes/actionTypes'
import { User } from '../../Types/model'

export const userLoggedIn = (userWithToken: User) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: userWithToken
  }
}

export function login (email: string, password: string) {
  return async function thunk(dispatch: Dispatch, getState: GetState){
    const postUrl = `${apiUrl}/login`

    const response = await axios.post(postUrl, {
      email,
      password
    })

    dispatch(userLoggedIn(response.data))
  }
}