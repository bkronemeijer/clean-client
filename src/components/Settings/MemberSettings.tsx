import React from 'react'
import { User } from '../../Types/model'

type Props = {
  user: User
}

export default function TaskSettings(props: Props) {
  return (
    <div className="admin-settings">
      <p>{props.user.name}</p>
      <button>X</button>
    </div>
  )
}
