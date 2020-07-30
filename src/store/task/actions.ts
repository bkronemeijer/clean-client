import {apiUrl} from '../../config/constants'
import axios from 'axios'
import { Dispatch } from 'redux'
import { GetState, fetchCurrentTaskType } from '../StoreTypes/actionTypes'
import {
  TASKS_FETCHED,
  CURRENT_TASK_FETCHED,
  fetchTask
} from '../StoreTypes/actionTypes'
import { Task } from '../../Types/model'
import { setMessage } from '../appState/actions'
// import { appDoneLoading } from '../appState/actions'

export const tasksFetched = (tasks: Task[]): fetchTask => ({
  type: TASKS_FETCHED,
  payload: tasks
})

export const currentTaskFetched = (currentTask: Task): fetchCurrentTaskType => ({
  type: CURRENT_TASK_FETCHED,
  payload: currentTask
})



export function fetchTasks (householdId: number) {
  return async function thunk (dispatch: Dispatch, getState: GetState) {
    const fetchUrl = `${apiUrl}/task`
    const token = localStorage.getItem("token")

    const response = await axios.post(fetchUrl, {
      id: 1
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (response.status >= 200 || response.status < 300) {
      dispatch(tasksFetched(response.data))
    }
  }
}

export function fetchCurrentTask (userId: number, recurrence: number) {
  return async function thunk (dispatch: Dispatch, getState: GetState) {
    if (!userId || !recurrence) {
      return
    }
    const fetchUrl = `${apiUrl}/mytask`
    const token = localStorage.getItem("token")

    try {
      const response = await axios.post(fetchUrl, {
        userId,
        recurrence
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      
      if (response.status >= 200 || response.status < 300) {
        dispatch(currentTaskFetched(response.data))
      }
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

export function updateCurrentTask (myTaskId: number) {
  return async function thunk (dispatch: Dispatch, getState: GetState) {
    if (!myTaskId) {
      return
    }
    const fetchUrl = `${apiUrl}/mytask`
    const token = localStorage.getItem("token")

    try {
      const response = await axios.patch(fetchUrl, {
        myTaskId
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      
      if (response.status >= 200 || response.status < 300) {
        dispatch(currentTaskFetched(response.data))
      }
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