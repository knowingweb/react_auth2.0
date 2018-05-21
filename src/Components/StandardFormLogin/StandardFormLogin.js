import React, { Component } from 'react'

// TODO reemplazar esto por el componente desde la libreria
import ButtonCmp from '../Elements/ButtonCmp/ButtonCmp'
import InputCmp from '../Elements/InputCmp/InputCmp'
import LabelCmp from '../Elements/LabelCmp/LabelCmp'

import MicroIcon from 'react-microvoz-icons'

import styles from './StandardFormLogin.css'

class FormLogin extends Component {
  contructor(props){
    this.setState({
      username: null,
      password: null
    })
    //this.onSubmit = this.onSubmit.bind(this)
  }
  onInputChange(e){
    this.setState({[e.target.id]: e.target.value})
  }
  onSubmit(e){
    e.preventDefault()
    this.props.onSubmit(this.state)
  }
  render() {
    const { username, password } = this.state || { username: "", password: "" }

    return (
      <div className= { styles.FormLogin }>
        <span className= { styles.FormLogin__title} >Login</span>
        <div className="FormLogin__content">
          <form action="" className="FormLogin__form">

            <div className={ styles.FormLogin__input-container }>
              <div className= { styles.FormLogin__icon-container}>
                <MicroIcon name="user" alt="username" className={ styles.FormLogin__input-icon} size="21px" />
              </div>
              <div className={ styles.FormLogin__input-group }>
                <LabelCmp title="Usuario"/>
                <InputCmp type="text" placeholder="" id = "username" value={username} onChange={this.onInputChange.bind(this)} />
              </div>
            </div>

            <div className="FormLogin__input-container">
              <div className="FormLogin__icon-container">
                <MicroIcon name="closed" alt="username" className="FormLogin__input-icon" size="19px" />
              </div>
              <div className="FormLogin__input-group">
                <LabelCmp title="Clave"/>
                <InputCmp type="password" placeholder="" id="password" value={password} onChange={this.onInputChange.bind(this)} />
              </div>
            </div>

            <div className="FormLogin__actions-container">
              <ButtonCmp
                onClick={this.onSubmit.bind(this)}
                title="Ingresar"
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default FormLogin


