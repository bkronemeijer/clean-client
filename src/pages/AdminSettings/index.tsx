import React, { useEffect, useState } from 'react'
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


export default function AdminSettings() {
  const dispatch = useDispatch()
  const householdId = useSelector(selectUserHouseholdId)
  const household = useSelector(selectHouseholdWithUsers)
  const tasks = useSelector(selectTasks)

  useEffect(() => {
    dispatch(fetchHouseholdWithUsers(householdId))
  }, [dispatch, householdId])

  useEffect(() => {
    dispatch(fetchTasks(householdId, household.recurrence))
  }, [dispatch, householdId, household])


  return (
    <div className="settings-background admin-settings-page">
      <div className="settings">
        <h1>Admin panel</h1>
        {tasks && household ?
          <div>
            <h2>Tasks</h2>
            {tasks.map((task: Task) => {
              return (
                <TaskSettings key={task.id} task={task} household={household}/>
              )
            })}

            <h2>Members</h2>
            {household.users.map((user: User) => {
              return (
                <MemberSettings key={user.id} user={user}/>
              )
            })}

            <h2>Household settings</h2>
            <HouseholdSettings household={household}/>
            
          </div>

          :
          <Loading />
        }
      
      </div>
    </div>
  )
}
