import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  NavLink,
} from 'reactstrap';

import logoAdmin from '../img/microvoz-admin-logo.svg';

//import FormLogin from '../Elements/FormLogin/FormLogin'
import HeaderCmp from "./HeaderCmp/HeaderCmp";

import './LoginScreen.css'

export default class LoginPage extends Component {
  render() {
    return (
      <Container fluid={true} className="LoginPage">
        <Row>
          <Col>
            <HeaderCmp />
          </Col>
        </Row>
        <Row>
          <Col>
            <NavLink to="/" className="LoginPage__logo">
              <img src={logoAdmin} alt="logo admin" className="LoginPage__logo__image"/>
            </NavLink>
          </Col>
        </Row>
        <Row>
          <Col>
            { this.props.children }
          </Col>
        </Row>
      </Container>
    )
  }
}

