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
      <div className={styles.HeaderCmp}>
        <Nav className={styles.HeaderCmp__nav}>
          <div>{props.left}</div>
          <div>{props.center}</div>
          <div>{props.right}</div>
        </Nav>
      </div>
    )
  }
}

