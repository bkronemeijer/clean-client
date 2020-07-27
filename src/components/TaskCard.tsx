import React from 'react'
import { Task } from '../Types/model';

type Props = {
  task: Task;
};

const capitalize = (s: string | Text) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default function TaskCard(props: Props) {
  const {task} = props
  const title = capitalize(task.title)
  const desc = capitalize(task.description)

  return (
    <div className="task-card">
      <h2>{title}</h2>
      <p>{desc}</p>
      <p>Currently assigned to: </p>
    </div>
  )
}
