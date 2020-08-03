import {apiUrl} from '../../config/constants'
import axios from 'axios'
import { Dispatch } from 'redux'
import { 
  GetState, 
  TASKS_FETCHED,
  CURRENT_TASK_FETCHED,
  ALL_CURRENT_TASKS_FETCHED,
  fetchCurrentTaskType, 
  fetchAllCurrentTasksType,
  fetchTask
} from '../StoreTypes/actionTypes'
import { Task } from '../../Types/model'
import { setMessage } from '../appState/actions'
// import { appDoneLoading } from '../appState/actions'

export const tasksFetched = (tasks: Task[]): fetchTask => ({
  type: TASKS_FETCHED,
  payload: tasks
})

export const allCurrentTasksFetched = (currentTasks: Task[]): fetchAllCurrentTasksType => ({
  type: ALL_CURRENT_TASKS_FETCHED,
  payload: currentTasks
})

export const currentTaskFetched = (currentTask: Task): fetchCurrentTaskType => ({
  type: CURRENT_TASK_FETCHED,
  payload: currentTask
})



export function fetchTasks (householdId: number) {
  return async function thunk (dispatch: Dispatch, getState: GetState) {
    if (!householdId ) {
      return
    }

    const fetchUrl = `${apiUrl}/task/static`
    const token = localStorage.getItem("token")

    try {
      const response = await axios.post(fetchUrl, {
        householdId,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
      if (response.status >= 200 || response.status < 300) {
        console.log(response.data, 'RESPONSE')
        dispatch(tasksFetched(response.data))
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

export function fetchAllCurrentTasks (householdId: number, recurrence: number) {
  return async function thunk (dispatch: Dispatch, getState: GetState) {
    if (!householdId || !recurrence) {
      return
    }

    const fetchUrl = `${apiUrl}/task/current`
    const token = localStorage.getItem("token")

    try {
      const response = await axios.post(fetchUrl, {
        householdId,
        recurrence
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
      if (response.status >= 200 || response.status < 300) {
        dispatch(allCurrentTasksFetched(response.data))
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

      console.log(response.data)
      
      if (response.status >= 200 || response.status < 300) {
        dispatch(currentTaskFetched(response.data))
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

export function updateCurrentTask (myTaskId: number, userId: number, recurrence: number) {
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
        dispatch(
          //@ts-ignore
          fetchCurrentTask(userId, recurrence))
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

export function deleteTask (taskId: number, userId: number, recurrence: number) {
  return async function thunk (dispatch: Dispatch, getState: GetState) {
    if (!taskId) {
      return
    }
    const deleteUrl = `${apiUrl}/task/delete`
    const token = localStorage.getItem("token")

    try {
      const response = await axios.post(deleteUrl, {
        taskId
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (response.status >= 200 || response.status < 300) {
        dispatch(
          //@ts-ignore
          fetchTasks(userId, recurrence))
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

export function addTask (userId: number, deadline: any, householdId: number, title: string, description: string, recurrence: number) {
  return async function thunk (dispatch: Dispatch, getState: GetState) {
    if (!userId || !householdId || !deadline || !title || !description || !recurrence) {
      return
    }
    const addUrl = `${apiUrl}/task/add`
    const token = localStorage.getItem("token")

    try {
      const response = await axios.post(addUrl, {
        userId,
        householdId,
        deadline,
        title,
        description,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      console.log(response.data)
      
      if (response.status >= 200 || response.status < 300) {
        dispatch(
          //@ts-ignore
          fetchTasks(householdId, recurrence))
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