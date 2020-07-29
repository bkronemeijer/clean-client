import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/user/actions';
import { useHistory, Link } from 'react-router-dom';
import { selectLoginSuccess } from '../../store/user/selectors';

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (e: any) => {
    e.preventDefault()
    try {
      dispatch(login(email, password))
    } catch (error) {
      console.log(error)
    }
  }

  if (localStorage.getItem("token")) {
    history.push("/household") // TODO: only redirect if successful
  }

  return (
    <div className="page-content login-page">
      <h1>Login</h1>
      <form onSubmit={e => submitHandler(e)}>
        <div className="login-container">
          <div className="login-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          {/* { !loginSuccess ?
            <p className="login-warning">Unknown email address, <Link to="/signup">sign up</Link></p>
          :
          <p></p>
          } */}
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
  )
}
