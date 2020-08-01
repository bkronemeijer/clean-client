import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCurrentTask, updateCurrentTask } from '../../store/task/actions'
import { selectLoggedInUserId, selectUserHouseholdId } from '../../store/user/selectors'
import { selectHouseholdWithUsers } from '../../store/household/selectors'
import { selectCurrentTask } from '../../store/task/selectors'
import { fetchHouseholdWithUsers } from '../../store/household/actions'
import Loading from '../../components/Loading'

export default function MyTaskPage() {
  const dispatch = useDispatch()
  const userId = useSelector(selectLoggedInUserId)
  const householdId = useSelector(selectUserHouseholdId)
  const household = useSelector(selectHouseholdWithUsers)
  const currentTask = useSelector(selectCurrentTask)
  const [toggleButton, setToggleButton] = useState<boolean>(false)
  const [notes, setNotes] = useState<string>("")

  useEffect(() => {
    dispatch(fetchHouseholdWithUsers(householdId))
  }, [dispatch, householdId])
  
  useEffect(() => {
    if (userId && household) {
      dispatch(fetchCurrentTask(userId, household.recurrence))
    }
  }, [dispatch, userId, household])
  
  const submitHandler = (e: any) => {
    e.preventDefault()
    dispatch(updateCurrentTask(currentTask.id, userId, household.recurrence))
  }

  return (
    <div className="household-background mytask-page">

      <div className="page-content">
        {
          currentTask ?
          <div>
            <h1>My task</h1>
            {
              currentTask.length === 0 ? 
                <p>You have no current task!</p>
              :
                <div>
                  <p>To do this week: {currentTask.task.title}</p>
                  <p>Deadline: {moment(currentTask.deadline).format('dddd')}</p>

                  {
                    currentTask.isDone ?
                      <p>Congratulations! You have finished your task</p>

                    :

                      <div>
                        <p>You are not yet done with your task</p>
                        {
                          toggleButton ?
                          <div>
                            <h2>I finished my task!</h2>

                            <form onSubmit={e => submitHandler(e)}>
                              <div className="login-container">
                                <div className="login-field">
                                  <label htmlFor="notes">Notes</label>
                                  <input id="notes" type="text" value={notes} onChange={e => setNotes(e.target.value)} />
                                </div>
                              </div>
                              <div className="login-footer">
                                <button>Submit</button>
                              </div>
                            </form>
                            
                          </div>
                          :
                            <button onClick={() => setToggleButton(!toggleButton)}>I am done with my task!</button>
                        }
                      </div>
                  }
                </div>
            }
          </div>

          :

          <Loading />
        }
      </div>
    </div>
  )
}
