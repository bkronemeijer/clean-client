import React, { useEffect } from 'react'
import { User } from '../Types/model';
import { useDispatch } from 'react-redux';
import { fetchCurrentTask } from '../store/task/actions';

type Props = {
  info: User;
  recurrence: number
};

export default function UserRow(props: Props) {
  const {id, name, successes, fails} = props.info

  // useEffect(() => {
  //   dispatch(fetchCurrentTask(userId, props.recurrence))
  // }, [dispatch, userId, props.recurrence])

  return (
    <tr>
      <td>{name}</td>
      <td>{successes ? successes : 0}</td>
      <td>{fails ? fails : 0}</td>
    </tr>
  )
}
