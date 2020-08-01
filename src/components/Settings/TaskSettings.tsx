import React from 'react'
import { Task } from '../../Types/model'

type Props = {
  task: Task
}

export default function TaskSettings(props: Props) {
  return (
    <div className="admin-settings">
      <p>{props.task.title}</p>
      <button>X</button>
    </div>
  )
}
