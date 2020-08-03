import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserHouseholdId } from '../../store/user/selectors'
import { fetchTasks } from '../../store/task/actions'
import { selectTasks } from '../../store/task/selectors'
import { Task, User } from '../../Types/model'

import Loading from '../../components/Loading'
import { selectHouseholdWithUsers } from '../../store/household/selectors'
import { fetchHouseholdWithUsers } from '../../store/household/actions'
import TaskSettings from '../../components/Settings/TaskSettings'
import MemberSettings from '../../components/Settings/MemberSettings'
import HouseholdSettings from '../../components/Settings/HouseholdSettings'
import AddNewTask from '../../components/Settings/AddNewTask'

export default function AdminSettings() {
  const dispatch = useDispatch()
  const householdId = useSelector(selectUserHouseholdId)
  const household = useSelector(selectHouseholdWithUsers)
  const tasks = useSelector(selectTasks)

  useEffect(() => {
    dispatch(fetchHouseholdWithUsers(householdId))
  }, [dispatch, householdId])

  useEffect(() => {
    dispatch(fetchTasks(householdId))
  }, [dispatch, householdId, household])


  return (
    <div className="settings-background admin-settings-page">
      <div className="settings">
        <h1>Admin panel</h1>
        {tasks && household ?
          <div>
            <details>
              <summary>Tasks</summary>
              {tasks.map((task: Task) => {
                return (
                  <TaskSettings key={task.id} task={task} household={household}/>
                )
              })}
              <AddNewTask household={household} tasks={tasks}/>
            </details>
            
            <details>
              <summary>Members</summary>
              {household.users.map((user: User) => {
                return (
                  <MemberSettings key={user.id} user={user}/>
                )
              })}
            </details>

            <details>
              <summary>Household settings</summary>
              <HouseholdSettings household={household}/>
            </details>
            
          </div>

          :
          <Loading />
        }
      
      </div>
    </div>
  )
}
