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
      <div className={ styles.HeaderCmp }>
        <Nav className= { styles.HeaderCmp__nav }>
          <NavItem className={ styles.HeaderCmp__nav-items }>
            <NavLink href="http://www.microvoz.com"
              className={ styles.HeaderCmp__nav-link} > www.microvoz.com
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    )
  }
}

