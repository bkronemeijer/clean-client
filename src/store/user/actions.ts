import {apiUrl} from '../../config/constants'
import axios from 'axios'
import { Dispatch } from 'redux'
import { GetState, TOKEN_STILL_VALID, tokenValidation, LOG_OUT, userLogout } from '../StoreTypes/actionTypes'
import { User } from '../../Types/model'
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  userLogin,
  loginFailed
} from '../StoreTypes/actionTypes'
import { showMessageWithTimeout, setMessage, appLoading, appDoneLoading } from '../appState/actions'
import { fetchHouseholdWithUsers } from '../household/actions'

export const userLoggedIn = (userWithToken: User): userLogin => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken
  }
}

export const loginFails = (): loginFailed => {
  return {
    type: LOGIN_FAIL
  }
}

export const logOut = (): userLogout => {
  return {
    type: LOG_OUT,
  }
}

export const tokenStillValid = (userWithToken: User): tokenValidation => {
  return {
    type: TOKEN_STILL_VALID,
    payload: userWithToken
  }
}

export function login (email: string, password: string) {
  return async function thunk(dispatch: Dispatch, getState: GetState){
    dispatch(appLoading())
    const postUrl = `${apiUrl}/login`

    try {
      const response = await axios.post(postUrl, {
        email,
        password
      })

      if (response.status >= 200 || response.status < 300) {
        dispatch(userLoggedIn(response.data))
        dispatch(tokenStillValid(response.data.token))
        dispatch(
          //@ts-ignore
          showMessageWithTimeout("success", false, "Welcome back!", 1500)
        )
      } 
      dispatch(appDoneLoading())

    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading())
    }
  }
}

export function signup (name: string, email: string, password: string, action: string, householdName: string, startDate: number, recurrence: string | number) {
  return async function thunk(dispatch: Dispatch, getState: GetState){
    dispatch(appLoading())
    const postUrl = `${apiUrl}/signup`

    try {
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
        dispatch(
          //@ts-ignore
          showMessageWithTimeout("success", false, "Welcome to dustly!", 1500)
        )
      }
      dispatch(appDoneLoading())
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading())
    }

  }
}

export const getUserWithStoredToken = () => {
  return async function thunk(dispatch: Dispatch, getState: GetState) {
    // get token from the storage
    const token = localStorage.getItem("token")

    // if we have no token, stop
    if (token === null) return;

    // dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // token is still valid
      dispatch(tokenStillValid(response.data));
      // dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      // dispatch(appDoneLoading());
    }
  };
};

export const updateUserSettings = (userId: number, name: string | undefined, wantsMail: boolean) => {
  return async function thunk(dispatch: Dispatch, getState: GetState) {
    const token = localStorage.getItem("token")

    try {
      const response = await axios.patch(`${apiUrl}/user`, {
        id: userId,
        name,
        wantsMail
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      console.log(response.data)
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      dispatch(logOut());
    }
  };
};

export function deleteUser (userId: number, householdId: number) {
  return async function thunk (dispatch: Dispatch, getState: GetState) {
    if (!userId) {
      return
    }
    const deleteUrl = `${apiUrl}/user/delete`
    const token = localStorage.getItem("token")

    try {
      const response = await axios.post(deleteUrl, {
        userId
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (response.status >= 200 || response.status < 300) {
        dispatch(
          //@ts-ignore
          fetchHouseholdWithUsers(householdId))
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        // dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        // dispatch(setMessage("danger", true, error.message));
      }
    }
  }
}

