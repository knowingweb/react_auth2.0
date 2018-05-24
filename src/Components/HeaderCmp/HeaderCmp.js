import React, { Component } from 'react'

import {
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import styles from './HeaderCmp.css'

export default class HeaderCmp extends Component {
  render() {
    const { left, center, right } = this.props;
    return (
      <div className={styles.HeaderCmp}>
        <Nav className={styles.HeaderCmp__nav}>
          <div>{left}</div>
          <div>{center}</div>
          <div>{right}</div>
        </Nav>
      </div>
    )
  }
}

