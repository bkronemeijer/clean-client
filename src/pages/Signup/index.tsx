import React, { useState } from 'react'
import Select, {ValueType} from 'react-select';
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { signup } from '../../store/user/actions'
import { useHistory } from 'react-router-dom'
import { setMessage } from '../../store/appState/actions';

type Option = {
  value: string;
  label: string;
}

export default function Signup() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [repeatPassword, setRepeatPassword] = useState<string>("")
  const [action, setAction] = useState<string>("")
  const [householdName, setHouseholdName] = useState<string>("")
  const [startDate, setstartDate] = useState<string>("")
  const [recurrence, setRecurrence] = useState<string>("weekly")

  const submitHandler = (e: any) => {
    
    e.preventDefault()
    console.log(name, email, password, action, householdName, startDate, recurrence)
    const startDay = moment(startDate).day() 
    if (password === repeatPassword) {
      dispatch(signup(name, email, password, action, householdName, startDay, recurrence))
    } else {
      dispatch(setMessage("danger", true, "Passwords do not match"))
    }
  }
  
  if (localStorage.getItem("token")) {
    history.push("/settings")
  }

  return (
    <div className="household-background2">
      <div className="signup-page">
        <h1>Sign up to Dustly</h1>
        <form onSubmit={e => submitHandler(e)}>
          <div className="form-fields">
            <div className="login-field">
              <label htmlFor="name">Name</label>
              <input required id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="login-field">
              <label htmlFor="email">Email</label>
              <input required id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="login-field">
              <label htmlFor="password">Password</label>
              <input required id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="login-field">
              <label htmlFor="repeat-password">Repeat password</label>
              <input required id="repeat-password" type="password" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} />
            </div>
          </div>

          <div className="login-selector">
            <label htmlFor="action">I want to</label>

            <Select options={[
                  {
                    value: 'create',
                    label: 'Create a household'
                  },
                  {
                    value: 'join',
                    label: 'Join a household'
                  }
                ]} onChange={(e: ValueType<Option>) => {
                  //@ts-ignore
                  setAction(e.value)
                }} styles={{
                  container: base => ({
                    ...base,
                    flex: 1,
                  })
                }}/>

          </div>
          {
            action ?

            <div>
              <div className="login-field">
                <label htmlFor="household-name">Household name</label>
                <input required id="household-name" type="text" value={householdName} onChange={e => setHouseholdName(e.target.value)} />
              </div>
              {
                action === "create" ?
                <div className="household-form-fields">
                  <div className="login-field">
                    <label htmlFor="start-date">Start date</label>
                    <input required id="start-date" type="date" value={startDate} onChange={e => setstartDate(e.target.value)} />
                  </div>
                  <div className="login-selector">
                    <label htmlFor="recurrence">Recurrence</label>
      
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
                </div>
                : <p></p>
              }

            </div>
            :
            <p></p>
          }
          <button>Sign up</button>
        </form>
      </div>
    </div>
  )
}
