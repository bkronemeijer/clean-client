import React from 'react'
import { User } from '../../Types/model'

type Props = {
  user: User
}

export default function TaskSettings(props: Props) {
  return (
    <div>
      {props.user.name}
    </div>
  )
}
