import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
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

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInName)
  
  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation userName={user}/>
      <div className="App-content">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/household" component={HouseholdPage}/>
          <Route path="/tasks" component={TaskPage}/>
          <Route path="/my-task" component={MyTaskPage}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/settings" component={Settings}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
