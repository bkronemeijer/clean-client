import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HouseholdPage from './pages/HouseholdPage';
import TaskPage from './pages/TaskPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MyTaskPage from './pages/MyTaskPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/household" component={HouseholdPage}/>
        <Route path="/tasks" component={TaskPage}/>
        <Route path="/my-task" component={MyTaskPage}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
