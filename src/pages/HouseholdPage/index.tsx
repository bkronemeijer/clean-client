import React, { useEffect } from 'react'
import { fetchHouseholdWithUsers } from '../../store/household/actions'
import { useDispatch } from 'react-redux'

export default function HouseholdPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHouseholdWithUsers(1))

  }, [dispatch])

  return (
    <div>
      
    </div>
  )
}
