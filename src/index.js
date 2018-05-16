/**
 * @class ExampleComponent
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import { fakeAuth } from '../http/fakeAuth'
import React from 'react'
//import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
// import RefreshTokenPage from '../containers/RefreshTokenPageContainer'
import { Route, Redirect } from 'react-router-dom';

import styles from './styles.css'

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



const FriendlyRoutes = ({ component: Component, ...rest }) => {
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


