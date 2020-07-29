import {apiUrl} from '../../config/constants'
import axios from 'axios'
import { Dispatch } from 'redux'
import { GetState } from '../StoreTypes/actionTypes'
import {
  TASKS_FETCHED,
  fetchTask
} from '../StoreTypes/actionTypes'
import { Task } from '../../Types/model'
import { appDoneLoading } from '../appState/actions'

export const tasksFetched = (tasks: Task[]): fetchTask => ({
  type: TASKS_FETCHED,
  payload: tasks
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
    console.log("my task action!", userId, recurrence)
    const fetchUrl = `${apiUrl}/mytask`
    const token = localStorage.getItem("token")

    const response = await axios.post(fetchUrl, {
      userId,
      recurrence
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(response.data)
    if (response.status >= 200 || response.status < 300) {
      dispatch(tasksFetched(response.data))
    }
  }
}