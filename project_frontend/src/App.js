import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Signup from './components/DH_Components/student_Register';
import Login from './components/DH_Components/student_login';
import Group from './components/DH_Components/grp_topic';
import Members from './components/DH_Components/grp_members';
import Supervisors from './components/DH_Components/supervisors';


export default class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
              <Route path ='/aa' component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/grpreg" component={Group} />
              <Route path="/grpmem/:data" component={Members} />
              <Route path="/supervisors" component={Supervisors} />

            </Switch>
        </Router>
    )
  }
}