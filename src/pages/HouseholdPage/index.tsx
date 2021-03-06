import React, { useEffect } from 'react'
import { fetchHouseholdWithUsers } from '../../store/household/actions'
import { useDispatch, useSelector } from 'react-redux'
import { selectHouseholdWithUsers } from '../../store/household/selectors'
import UserRow from '../../components/UserRow'
import { selectUserHouseholdId } from '../../store/user/selectors'
import { User } from '../../Types/model'
import Loading from '../../components/Loading'
import thumbsup from '../../Statics/assets/thumb-up.svg'
import thumbsdown from '../../Statics/assets/thumb-down.svg'

export default function HouseholdPage() {
  const dispatch = useDispatch()
  const household = useSelector(selectHouseholdWithUsers)
  const householdId = useSelector(selectUserHouseholdId)
  const users = household.users

  useEffect(() => {
    dispatch(fetchHouseholdWithUsers(householdId))
  }, [dispatch, householdId])

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
                    <th><img src={thumbsup} alt="V"/></th>
                    <th><img src={thumbsdown} alt="X"/></th>
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
