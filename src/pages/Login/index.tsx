import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../store/user/actions';
import { useHistory, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [successful, setSuccessful] = useState<boolean>();
  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (e: any) => {
    e.preventDefault()
    try {
      dispatch(login(email, password, setSuccessful))
      console.log(successful)
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
          { successful === false ?
            <p className="login-warning">Unknown email address, <Link to="/signup">sign up</Link></p>
          :
          <p></p>
          }
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
