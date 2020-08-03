import React from 'react'
import { User } from '../../Types/model'
import { deleteUser } from '../../store/user/actions'
import { useDispatch, useSelector } from 'react-redux'
import crossmark from '../../Statics/assets/x-mark-thin.svg'
import { selectLoggedInUserId } from '../../store/user/selectors'

type Props = {
  user: User
}

export default function TaskSettings(props: Props) {
  const dispatch = useDispatch()
  const userId = useSelector(selectLoggedInUserId)

  const removeMember = (e: any) => {
    dispatch(deleteUser(props.user.id, props.user.householdId))
  }

  return (
    <>
    {
      props.user.id === userId ?
        <div className="admin-settings">
          <p>{props.user.name}</p>
        </div>
      :
        <div className="admin-settings">
          <p>{props.user.name}</p>
          <button onClick={e => removeMember(e)}><img src={crossmark} alt="X"/></button>
        </div>
      }
    </>  
  )
}
