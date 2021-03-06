import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../store/user/actions';
import { useHistory, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (e: any) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  if (localStorage.getItem("token")) {
    history.push("/household")
  }

  return (
    <div className="household-background">
      <div className="login-page">
        <h1>Login</h1>
        <form onSubmit={e => submitHandler(e)}>
          <div className="login-container">
            <div className="login-field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="login-footer">
            <button>Log in</button>
            <Link to="/signup">Click here to sign up</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
