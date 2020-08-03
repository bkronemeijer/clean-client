import React, { useState } from 'react'
import Select, {ValueType} from 'react-select';
import { Household } from '../../Types/model';
import { useDispatch } from 'react-redux';
import { updateHousehold } from '../../store/household/actions';

type Option = {
  value: string;
  label: string;
}

type Props = {
  household: Household
}


export default function HouseholdSettings(props: Props) {
  const household = props.household
  const dispatch = useDispatch()
  const [name, setName] = useState<string>("")
  const [recurrence, setRecurrence] = useState<string>("")
  const [day, setDay] = useState<string>("")
  
  const submitHandler = (e: any) => {
    e.preventDefault()
    dispatch(updateHousehold(household.id, name, day, recurrence))
  }

  return (
    <div>
      <form onSubmit={e => submitHandler(e)}>
        <div className="form-container">
          <div className="form-field">
            <label htmlFor="nameSetting">Household name</label>
            <input id="nameSetting" placeholder={household.nickName} type="text" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="form-field">
            <label htmlFor="nameSetting">Recurrence</label>
            <Select options={[
              {
                value: 'weekly',
                label: 'Weekly'
              },
              {
                value: 'biweekly',
                label: 'Biweekly'
              }
            ]} onChange={(e: ValueType<Option>) => {
              //@ts-ignore
              setRecurrence(e.value)
            }} styles={{
              container: base => ({
                ...base,
                flex: 1
              })
            }}/>
          </div>
          <div className="form-field">
            <label htmlFor="nameSetting">Deadline day</label>
            <Select options={[
              {
                value: 'monday',
                label: 'Monday'
              },
              {
                value: 'tuesday',
                label: 'Tuesday'
              },
              {
                value: 'wednesday',
                label: 'Wednesday'
              },
              {
                value: 'thursday',
                label: 'Thursday'
              },
              {
                value: 'friday',
                label: 'Friday'
              },
              {
                value: 'saturday',
                label: 'Saturday'
              },
              {
                value: 'sunday',
                label: 'Sunday'
              },
            ]} onChange={(e: ValueType<Option>) => {
              //@ts-ignore
              setDay(e.value)
            }} styles={{
              container: base => ({
                ...base,
                flex: 1
              })
            }}/>
          </div>
        </div>
        <div className="form-footer">
          <button>Save settings</button>
        </div>
      </form>
    </div>
  )
}
