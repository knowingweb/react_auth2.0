import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { fakeAuth } from './libs/fakeAuth'


const GuestRoutes = ({ component: Component, ...rest }) => {
  let element

  console.log(rest)
  console.log(rest.location.pathname)
  if(fakeAuth.isAuthenticated()){
    if(rest.location.pathname === "/oauth/login")
      element = (<Redirect to={{ pathname: '/app/home', state: { from: rest.location }}} />)
    else
      element = (<Component {...rest} />)
  }else
    element = (<Component {...rest} />)

  return (
    <Route {...rest} render={ (props) => (element)} />
  )
}


export default GuestRoutes
