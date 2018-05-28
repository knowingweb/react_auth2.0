import React, { Component } from 'react'

import {
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import styles from './HeaderCmp.css'

export default class HeaderCmp extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <Nav className={styles.HeaderCmp__nav}>
          { this.props.children }
        </Nav>
      </div>
    )
  }
}

