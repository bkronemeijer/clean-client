import {apiUrl} from '../../config/constants'
import axios from 'axios'
import { Dispatch } from 'redux'
import { GetState } from '../StoreTypes/actionTypes'
import {
  TASKS_FETCHED,
  fetchTask
} from '../StoreTypes/actionTypes'
import { Task } from '../../Types/model'

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

    dispatch(tasksFetched(response.data))

    console.log("hoi dit is een response van tasks", response)
  }
}