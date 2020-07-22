import React, { useEffect } from 'react'
import { fetchHouseholdWithUsers } from '../../store/household/actions'
import { useDispatch, useSelector } from 'react-redux'
import { selectHouseholdWithUsers } from '../../store/household/selectors'

export default function HouseholdPage() {
  const dispatch = useDispatch()
  const household = useSelector(selectHouseholdWithUsers)


  useEffect(() => {
    dispatch(fetchHouseholdWithUsers(1))

  }, [dispatch])

  return (
    <div className="household-page">
      {
        household ? 
          <div>
            <h1>{household.nickName}</h1>
          </div>
        :

        <p><em>Loading...</em></p>
      }
    </div>
  )
}
