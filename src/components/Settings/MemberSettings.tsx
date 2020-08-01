import React from 'react'
import { User } from '../../Types/model'

type Props = {
  user: User
}

export default function TaskSettings(props: Props) {
  const removeMember = (e: any) => {
    console.log("removeMember", props.user.id)
  }

  return (
    <div className="admin-settings">
      <p>{props.user.name}</p>
      <button onClick={e => removeMember(e)}>X</button>
    </div>
  )
}
