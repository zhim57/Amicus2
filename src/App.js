import React from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Signup from "./components/Signup"
import { AuthProvider } from "./contexts/AuthContext"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import Logout from "./components/Logout"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
import SortTest from "./components/SortTest"
import Nav from "./components/Nav"

function App() {

  return (

    <Router>
      <AuthProvider>
          <Nav />
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/SortTest" component={SortTest} />
           
          </Switch>
          
      </AuthProvider>
    </Router>
  )
}

export default App