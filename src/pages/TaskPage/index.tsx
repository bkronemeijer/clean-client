import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserHouseholdId } from '../../store/user/selectors'
import { fetchTasks } from '../../store/task/actions'
import { selectTasks } from '../../store/task/selectors'
import { Task } from '../../Types/model'
import TaskCard from '../../components/TaskCard'
import Loading from '../../components/Loading'
import { selectHouseholdWithUsers } from '../../store/household/selectors'
import { fetchHouseholdWithUsers } from '../../store/household/actions'

export default function TaskPage() {
  const dispatch = useDispatch()
  const householdId = useSelector(selectUserHouseholdId)
  const household = useSelector(selectHouseholdWithUsers)
  const tasks = useSelector(selectTasks)

  if (tasks) {
    //@ts-ignore
    tasks.forEach(task => console.log(task.taskSchedules))
  }
    

  useEffect(() => {
    dispatch(fetchHouseholdWithUsers(householdId))
  }, [dispatch, householdId])

  useEffect(() => {
    dispatch(fetchTasks(householdId, household.recurrence))
  }, [dispatch, householdId, household])

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
