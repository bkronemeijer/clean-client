import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCurrentTask } from '../../store/task/actions'
import { selectLoggedInUserId } from '../../store/user/selectors'
import { selectHouseholdWithUsers } from '../../store/household/selectors'

export default function MyTaskPage() {
  const dispatch = useDispatch()
  const userId = useSelector(selectLoggedInUserId)
  const recurrence = useSelector(selectHouseholdWithUsers)
  // const currentTask = useSelector(selectCurrentTask)

  useEffect(() => {
    dispatch(fetchCurrentTask(userId, recurrence))
  }, [dispatch, userId, recurrence])

  return (
    <div className="page-content">
      <h1>My task</h1>
    </div>
  )
}
