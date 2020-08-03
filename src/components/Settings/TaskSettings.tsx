import React from 'react'
import { Task, Household } from '../../Types/model'
import { useDispatch } from 'react-redux'
import {deleteTask} from '../../store/task/actions'
import crossmark from '../../Statics/assets/x-mark-thin.svg'

type Props = {
  task: Task
  household: Household
}

export default function TaskSettings(props: Props) {
  const dispatch = useDispatch()

  const removeTaskHandler = (e: any) => {
    dispatch(deleteTask(props.task.id, props.household.id, props.household.recurrence))
  }


  return (
    <div className="admin-settings">
      <p>{props.task.title}</p>
      <button onClick={e => removeTaskHandler(e)}><img src={crossmark} alt="X"/></button>
    </div>
  )
}
