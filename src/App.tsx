import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'
import HouseholdPage from './pages/HouseholdPage';
import TaskPage from './pages/TaskPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MyTaskPage from './pages/MyTaskPage';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Settings from './pages/Settings';
import './Statics/shared.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getUserWithStoredToken } from './store/user/actions';
import { selectLoggedInName } from './store/user/selectors';
import MessageBox from './components/MessageBox';
import { selectAppLoading } from './store/appState/selectors';
import Loading from './components/Loading';
import AdminSettings from './pages/AdminSettings';

function App() {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(selectLoggedInName)
  const isLoading = useSelector(selectAppLoading);
  const token = localStorage.getItem("token")
  
  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  useEffect(() => {
    if (!token) {
      history.push("/login")
    }
  }, [history, token])

  return (
    <div className="App">
      <Navigation userName={user}/>
      <MessageBox />
      {isLoading ? <Loading /> : null}
      {/* <Loading /> */}
      <div className="App-content">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/household" component={HouseholdPage}/>
          <Route path="/tasks" component={TaskPage}/>
          <Route path="/my-task" component={MyTaskPage}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/admin-settings" component={AdminSettings}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
