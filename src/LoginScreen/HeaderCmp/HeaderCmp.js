import React, { Component } from 'react'

import {
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import './HeaderCmp.css'

export default class HeaderCmp extends Component {
  render() {
    return (
      <div className="HeaderCmp">
        <Nav className="HeaderCmp__nav">
          <NavItem className="HeaderCmp__nav-items">
            <NavLink href="http://www.microvoz.com"
              className="HeaderCmp__nav-link" > www.microvoz.com
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    )
  }
}

