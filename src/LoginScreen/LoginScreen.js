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

import styles from './LoginScreen.css'

export default class LoginPage extends Component {
  render() {
    return (
      <Container fluid={true} className={ styles.LoginPage }>
        <Row>
          <Col>
            <HeaderCmp />
          </Col>
        </Row>
        <Row>
          <Col>
            <NavLink to="/" className= { styles.LoginPage__logo }>
              <img src={logoAdmin} alt="logo admin" className={ styles.LoginPage__logo__image }/>
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

