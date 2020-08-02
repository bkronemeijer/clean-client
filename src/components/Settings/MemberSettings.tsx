import React from 'react'
import { User } from '../../Types/model'
import { deleteUser } from '../../store/user/actions'
import { useDispatch } from 'react-redux'

type Props = {
  user: User
}

export default function TaskSettings(props: Props) {
  const dispatch = useDispatch()

  const removeMember = (e: any) => {
    console.log("removeMember", props.user.id, props.user.householdId)
    dispatch(deleteUser(props.user.id, props.user.householdId))
  }

  return (
    <div className="admin-settings">
      <p>{props.user.name}</p>
      <button onClick={e => removeMember(e)}>X</button>
    </div>
  )
}
