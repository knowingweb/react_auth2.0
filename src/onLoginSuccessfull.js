/**
 * @class ExampleComponent
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom';

export default class onLoginSuccessfull extends Component {

  render() {
    console.log(process.env)
    return (
      <div>
        onlogin successfull
      </div>
    )
  }
}



