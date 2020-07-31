import React, { useEffect } from 'react'
import { fetchHouseholdWithUsers } from '../../store/household/actions'
import { useDispatch, useSelector } from 'react-redux'
import { selectHouseholdWithUsers } from '../../store/household/selectors'
import UserRow from '../../components/UserRow'
import { selectUserHouseholdId } from '../../store/user/selectors'
import { User } from '../../Types/model'
import Loading from '../../components/Loading'

export default function HouseholdPage() {
  const dispatch = useDispatch()
  const household = useSelector(selectHouseholdWithUsers)
  const householdId = useSelector(selectUserHouseholdId)
  const users = household.users

  useEffect(() => {
    dispatch(fetchHouseholdWithUsers(householdId))
  }, [dispatch, householdId])

  console.log(household)

  return (
    <div className="household-page household-background3">
      <div className="page-content">
        {
          household && users ? 
            <div>
              <h1>{household.nickName}</h1>

              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>V</th>
                    <th>X</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user: User) => {
                    return (
                      <UserRow key={user.id} info={user} recurrence={household.recurrence} />
                    )
                  })}
                </tbody>
              </table>
            </div>
          :

          <Loading />
        }
      </div>
    </div>
  )
}
