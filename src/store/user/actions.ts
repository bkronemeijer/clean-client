import {apiUrl} from '../../config/constants'
import axios from 'axios'
import { Dispatch } from 'redux'
import { GetState } from '../StoreTypes/actionTypes'
import { User } from '../../Types/model'
import {
  LOGIN_SUCCESS,
  userLogin
} from '../StoreTypes/actionTypes'

export const userLoggedIn = (userWithToken: User): userLogin => {
  return {
    type: LOGIN_SUCCESS,
    userWithToken
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

export function signup (name: string, email: string, password: string, action: string, householdName: string, startDate: string, recurrence: string | number) {
  return async function thunk(dispatch: Dispatch, getState: GetState){
    const postUrl = `${apiUrl}/signup`

    if (recurrence === "weekly") {
      recurrence = 7
    } else if (recurrence === "biweekly") {
      recurrence = 14
    }

    let response

    if (action === "create") {
      response = await axios.post(postUrl, {
        name,
        email,
        password,
        action,
        householdName,
        startDate,
        recurrence
      })
    } else if (action === "join") {
      response = await axios.post(postUrl, {
        name,
        email,
        password,
        action,
        householdName,
      })
    }

    if (response === undefined) {
      return
    }

    if (response.request.status >= 200 && response.request.status < 300) {
      dispatch(userLoggedIn(response.data))
    }
  }
}