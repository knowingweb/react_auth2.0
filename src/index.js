/**
 * @class ExampleComponent
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import { fakeAuth } from '../http/fakeAuth'
//import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
// import RefreshTokenPage from '../containers/RefreshTokenPageContainer'
import { Route, Redirect } from 'react-router-dom'
//import StandardFormLogin from 'StandardFormLogin/StandardFormLogin'

import styles from './styles.css'
//export Onloginsuccessfull from './onLoginSuccessfull'
import * as appStorage from './libs/appStorage'
export * as appStore from './libs/appStorage'


export function onLoginSuccessfull(response, history) {
  appStorage.setSessionInfoData(response.data)
  history.default.push(`/${APP_PREFIX}/app/home`)
  //alert("Hola soy el listener")
  //console.log(history)
  //console.log(response)
}

//export StandardFormLogin

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        Example Component: {text}
      </div>
    )
  }
}



export class Button extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        Example Component: {text}
      </div>
    )
  }
}


export const FriendlyRoutes = ({ component: Component, ...rest }) => {
  let element
  //if(fakeAuth.isAuthenticated()){
    element = (<Component {...rest} />)
  //}else
  //  element = (<Redirect to={{ pathname: '/oauth/login', state: { from: rest.location }}} />)
  return (
    <Route {...rest} render={ (props) => (element)} />
  )
}

/*FriendlyRoutes.propTypes = {
  //accessState: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  //accessState: state.auth.access.success
})

export default connect(mapStateToProps)(FriendlyRoutes)*/


