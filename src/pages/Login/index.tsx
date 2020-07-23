import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../store/user/actions';

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  // const token = useSelector(selectToken);
  const history = useHistory();

  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log("click")
    dispatch(login(email, password))
  }

  return (
    <div className="page-content login-page">
      <h1>Login</h1>
      <form onSubmit={e => submitHandler(e)}>
        <div className="login-field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="login-field">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <button>Log in</button>
        </div>
      </form>
    </div>
  )
}
