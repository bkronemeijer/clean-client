import React, { useState } from 'react'

export default function Signup() {
  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [repeatPassword, setRepeatPassword] = useState<string>()
  const [action, setAction] = useState<string>("create")
  const [householdName, setHouseholdName] = useState<string>()
  const [startDate, setstartDate] = useState<string>()
  const [recurrence, setRecurrence] = useState<string>()

  const submitHandler = (e: any) => {
    e.preventDefault()
  }

  return (
    <div className="page-content signup-page">
      <h1>Sign up to Dustly</h1>
      <form onSubmit={e => submitHandler(e)}>
        <div className="form-fields">
          <div className="login-field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="login-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="login-field">
            <label htmlFor="repeat-password">Repeat password</label>
            <input id="repeat-password" type="password" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} />
          </div>
        </div>

        <div className="login-selector">
          <label htmlFor="action">I want to</label>
          <select value={action} onChange={e => setAction(e.target.value)}>
            <option value="create">Create a household</option>
            <option value="join">Join a household</option>
          </select>
        </div>
        <div className="login-field">
          <label htmlFor="household-name">Household name</label>
          <input id="household-name" type="text" value={householdName} onChange={e => setHouseholdName(e.target.value)} />
        </div>
        {
          action === "create" ?
          <div className="household-form-fields">
            <div className="login-field">
              <label htmlFor="start-date">Start date</label>
              <input id="start-date" type="date" value={startDate} onChange={e => setstartDate(e.target.value)} />
            </div>
            <div className="login-selector">
              <label htmlFor="recurrence">Recurrence</label>
              <select value={recurrence} onChange={e => setRecurrence(e.target.value)}>
                <option value={'weekly'}>Weekly</option>
                <option value={'by-weekly'}>By-weekly</option>
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
