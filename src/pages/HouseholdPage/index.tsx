import React, { useEffect } from 'react'
import { fetchHouseholdWithUsers } from '../../store/household/actions'
import { useDispatch, useSelector } from 'react-redux'
import { selectHouseholdWithUsers } from '../../store/household/selectors'
import UserRow from '../../components/UserRow'
import { selectUserHouseholdId } from '../../store/user/selectors'
import { User } from '../../Types/model'

export default function HouseholdPage() {
  const dispatch = useDispatch()
  const household = useSelector(selectHouseholdWithUsers)
  const householdId = useSelector(selectUserHouseholdId)
  const users = household.users

  useEffect(() => {
    if (householdId){
      dispatch(fetchHouseholdWithUsers(householdId))
    }
  }, [dispatch, householdId])

  return (
    <div className="page-content household-page">
      {
        household && users ? 
          <div>
            <h1>{household.nickName}</h1>

            <table>
              <tbody>
                {users.map((user: User) => {
                  return (
                    <UserRow key={user.id} info={user} />
                  )
                })}
              </tbody>
            </table>
          </div>
        :

        <p><em>Loading...</em></p>
      }
    </div>
  )
}
