import React from 'react'
import { Task, CurrentTask } from '../Types/model';

type Props = {
  task: Task;
  currentTasks: CurrentTask[]
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
  const {task, currentTasks} = props
  const title = capitalize(task.title)
  const desc = capitalize(task.description)
  // const name = capitalize(task.taskSchedules[0].user.name)
  // const isDone = task.taskSchedules[0].isDone

  const currentTask = currentTasks ? currentTasks.find((currentTask) => currentTask.id === task.id) : "no one"

  if (currentTask){
    if (currentTask !== "no one" && currentTask.taskSchedules) {
      console.log('task', task, 'currentTask', 
      //@ts-ignore
      currentTask.taskSchedules[0].user.name)
    }
  }

  return (
    <div className="task-card">
      <h2>{title}</h2>
      <p>{desc}</p>
      {
        currentTask ?
          currentTask !== "no one" && currentTask.taskSchedules ?
            <div>
              <p>Currently assigned to: {currentTask.taskSchedules[0].user.name}</p>
              {
                currentTask.taskSchedules[0].isDone ?
                  <p>Done</p>
                  :
                  <p>Not yet done</p>
              }
            </div>

          :
          <></>

        :

        <p>Currently assigned to no one</p> 



      }
    </div>
  )
}
