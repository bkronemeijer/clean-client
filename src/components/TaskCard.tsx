import React from 'react'
import { Task } from '../Types/model';

type Props = {
  task: Task;
};

const capitalize = (s: string | Text) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// const applySentenceCase = (str: string | Text) => {
//   // @ts-ignore
//   return str.replace(/.+?[\.\?\!](\s|$)/g, function (txt: any) {
//       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });
// }

export default function TaskCard(props: Props) {
  const {task} = props
  const title = capitalize(task.title)
  const desc = capitalize(task.description)
  const name = capitalize(task.taskSchedules[0].user.name)
  const isDone = task.taskSchedules[0].isDone

  console.log(task)

  return (
    <div className="task-card">
      <h2>{title}</h2>
      <p>{desc}</p>
      <p>Currently assigned to: {name}</p>
      {
        isDone ? 
          <p>Done</p>
          :
          <p>Not yet done</p>
      }
    </div>
  )
}
