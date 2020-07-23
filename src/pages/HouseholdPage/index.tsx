import React, { useEffect } from 'react'
import { fetchHouseholdWithUsers } from '../../store/household/actions'
import { useDispatch, useSelector } from 'react-redux'
import { selectHouseholdWithUsers } from '../../store/household/selectors'
import UserRow from '../../components/UserRow'

export default function HouseholdPage() {
  const dispatch = useDispatch()
  const household = useSelector(selectHouseholdWithUsers)
  const users = household.users


  useEffect(() => {
    dispatch(fetchHouseholdWithUsers(1))
  }, [dispatch])

  return (
    <div className="page-content household-page">
      {
        household && users ? 
          <div>
            <h1>{household.nickName}</h1>

            <table>
              <tbody>
                {users.map((user: any) => {
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
