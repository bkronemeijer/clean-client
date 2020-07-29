import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../../store/user/actions'
import { useHistory } from 'react-router-dom'
import { setMessage } from '../../store/appState/actions'

export default function Signup() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [repeatPassword, setRepeatPassword] = useState<string>("")
  const [action, setAction] = useState<string>("create")
  const [householdName, setHouseholdName] = useState<string>("")
  const [startDate, setstartDate] = useState<string>("")
  const [recurrence, setRecurrence] = useState<string>("weekly")

  const submitHandler = (e: any) => {
    
    e.preventDefault()
    console.log(name, email, password, action, householdName, startDate, recurrence)

    if (password === repeatPassword) {
      dispatch(signup(name, email, password, action, householdName, startDate, recurrence))
    } else {
      dispatch(setMessage("danger", true, "Passwords do not match"))
    }
  }
  
  if (localStorage.getItem("token")) {
    history.push("/settings")
  }

  return (
    <div className="page-content signup-page">
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
          <select required value={action} onChange={e => setAction(e.target.value)}>
            <option value="create">Create a household</option>
            <option value="join">Join a household</option>
          </select>
        </div>
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
              <select required value={recurrence} onChange={e => setRecurrence(e.target.value)}>
                <option value={'weekly'}>Weekly</option>
                <option value={'biweekly'}>Biweekly</option>
              </select>
            </div>
          </div>
          : <p></p>
        }
        <div>
          <button>Sign up</button>
        </div>
      </form>
    </div>
  )
}
