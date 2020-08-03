import React from 'react'
import { User } from '../Types/model';

type Props = {
  info: User;
  recurrence: number
};

export default function UserRow(props: Props) {
  const {name, successes, fails} = props.info

  return (
    <tr>
      <td>{name}</td>
      <td>{successes ? successes : 0}</td>
      <td>{fails ? fails : 0}</td>
    </tr>
  )
}
