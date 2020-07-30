import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserHouseholdId } from '../../store/user/selectors'
import { fetchTasks } from '../../store/task/actions'
import { selectTasks } from '../../store/task/selectors'
import { Task } from '../../Types/model'
import TaskCard from '../../components/TaskCard'
import Loading from '../../components/Loading'

export default function TaskPage() {
  const dispatch = useDispatch()
  const householdId = useSelector(selectUserHouseholdId)
  const tasks = useSelector(selectTasks)

  useEffect(() => {
    if (householdId){
      dispatch(fetchTasks(householdId))
    }
  }, [dispatch, householdId])

  return (
    <div className="household-background2 task-page">
      <div className="page-content">
        {
          tasks ? 
            tasks.length !== 0 ?
              <div>
                <h1>Household tasks</h1>
                <div className="task-card-container">
                  {
                    tasks.map((task: Task) => {
                      return (
                        <TaskCard key={task.id} task={task}/>
                      )
                    })
                  }
                </div>
              </div>
            :
              <div>
                <h1>Oops</h1>
                <p>Your household has no tasks yet</p>
              </div>
          :

          <Loading />
        }
      </div>
    </div>
  )
}
