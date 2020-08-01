import React from 'react'
import { Task } from '../../Types/model'
import { useDispatch } from 'react-redux'
import {deleteTask} from '../../store/task/actions'

type Props = {
  task: Task
}

export default function TaskSettings(props: Props) {
  const dispatch = useDispatch()

  const removeTaskHandler = (e: any) => {
    console.log("removeTask", props.task.id)
    dispatch(deleteTask(props.task.id))
  }

  return (
    <div className="admin-settings">
      <p>{props.task.title}</p>
      <button onClick={e => removeTaskHandler(e)}>X</button>
    </div>
  )
}
