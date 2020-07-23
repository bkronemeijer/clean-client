import React from 'react'
import { User } from '../Types/model';

type Props = {
  info: User;
};

export default function UserRow(props: Props) {

  return (
    <tr>
      <td>{props.info.name}</td>
    </tr>
  )
}
