/**
 * @yefriddavid
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import * as appStorage from './libs/appStorage'
//import styles from './styles.css'


export * as appStore from './libs/appStorage'
export Request from './Request'
export FriendlyRoutes from './FriendlyRoutes'
export LoginScreen from './LoginScreen/LoginScreen'
export StandardFormLogin from './Components/StandardFormLogin/StandardFormLogin'
export HeaderCmp from './LoginScreen/HeaderCmp/HeaderCmp'

import './Components/StandardFormLogin/StandardFormLogin.css'
import styles from './styles.css'



const APP_PREFIX = process.env.REACT_APP_PREFIX || `default`


export function onLoginSuccessfull(response, history) {
  appStorage.setSessionInfoData(response.data)
  history.default.push(`/${APP_PREFIX}/app/home`)
}

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





