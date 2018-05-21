import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';
import { fakeAuth } from './libs/fakeAuth'


const FriendlyRoutes = ({ component: Component, ...rest }) => {
  let element
    console.log("david test")
  if(fakeAuth.isAuthenticated()){
    //If our app is autenticate and the client call path oauth/login we going to
    //redirect to home
    console.log(rest)
    element = (<Component {...rest} />)
  }else
    element = (<Redirect to={{ pathname: '/oauth/login', state: { from: rest.location }}} />)
  return (
    <Route {...rest} render={ (props) => (element)} />
  )
}

FriendlyRoutes.propTypes = {
  //accessState: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  //accessState: state.auth.access.success
})

export default connect(mapStateToProps)(FriendlyRoutes)
