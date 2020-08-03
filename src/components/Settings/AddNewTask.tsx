import React, { useState } from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { HouseholdWithUsers, Task } from '../../Types/model'
import Select, {ValueType} from 'react-select';
import { addTask } from '../../store/task/actions';

type Props = {
  household: HouseholdWithUsers,
  tasks: Task[]
}

type Option = {
  value: number;
  label: string;
}

export default function AddNewTask(props: Props) {
  const dispatch = useDispatch()
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [userId, setUserId] = useState<number>(0)
  const householdId = props.household.id
  const deadline = moment().add(props.household.recurrence, 'd')

  const addNewTask = (e: any) => {
    e.preventDefault()
    dispatch(addTask(userId, deadline, householdId, title, description, props.household.recurrence))
  }

  const emailOptions = props.household.users.map((user) => {
    return ({
      value: user.id,
      label: user.name
    })
  })

  return (
    <form onSubmit={e => addNewTask(e)}>
      <div className="form-container">
            <div className="form-field">
              <label htmlFor="title">Task title</label>
              <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="description">Description</label>
            <input id="description" type="text" value={description} onChange={e => setDescription(e.target.value)} />
          </div>
          <div className="form-field">
            <label htmlFor="password">First user</label>
            <Select options={emailOptions} onChange={(e: ValueType<Option>) => {
                  //@ts-ignore
                  setUserId(e.value)
                }} styles={{
                  container: base => ({
                    ...base,
                    flex: 1,
                  })
                }}/>
          </div>
          <div className="form-footer">
            <button>Add task</button>
          </div>      
    </form>
  )
}
