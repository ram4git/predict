import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Dashboard from './protected/Dashboard'
import Match from './protected/Match'
import Secret from './protected/Secret'
import EditMatch from './protected/EditMatch'
import Predict from './protected/Predict'
import UserProfile from './protected/UserProfile'
import { logout } from '../helpers/auth'
import { firebaseAuth } from '../config/constants'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
      : <Redirect to='/ranks' />}
    />
  )
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }

  //<Link to="/register" className="navbar-brand">Register</Link>

  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand">ICC Champions Trophy 2017 Predictor</Link>
              </div>
              <ul className="nav navbar-nav pull-right">
                <li>
                  <Link to="/" className="navbar-brand">Home</Link>
                </li>
                <li>
                  <Link to="/ranks" className="navbar-brand">Ranks</Link>
                </li>
                <li>
                  {this.state.authed
                    ? <a
                        onClick={(e) => {
                          logout(e)
                        }}
                        className="navbar-brand">Logout</a>
                    : <span>
                        <Link to="/login" className="navbar-brand">Login</Link>
                      </span>}
                </li>
              </ul>
            </div>
          </nav>
          <div className="container content">
            <div className="row">
              <Switch>
                <Route path='/' exact component={Home} />
                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PublicRoute authed={this.state.authed} path='/register' component={Register} />
                <PrivateRoute authed={this.state.authed} path='/ranks' component={Dashboard} />
                <PrivateRoute authed={this.state.authed} path='/match' component={Match} />
                <PrivateRoute authed={this.state.authed} path='/predict' component={Predict} />
                <PrivateRoute authed={this.state.authed} path='/me' component={UserProfile} />
                <PrivateRoute authed={this.state.authed} path='/secrets' component={Secret} />
                <PrivateRoute authed={this.state.authed} path='/secret/:matchId' component={EditMatch} />
                <Route render={() => <h3>Yo Maan! Type a correct page name Maan!!</h3>} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
