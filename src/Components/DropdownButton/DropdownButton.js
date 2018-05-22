import React, { Component } from 'react'

// TODO reemplazar esto por el componente desde la libreria
import ButtonCmp from '../Elements/ButtonCmp/ButtonCmp'
import styles from './DropdownButton.css'

class DropdownButton extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    buttonTextLabel: PropTypes.string,
    onSelectedButtonLabelText: PropTypes.string
  }

  contructor(props){
    this.setState({
      selectedId: "Entrar"
    })
  }
  onSelectItem(e){
    this.setState({[e.target.id]: e.target.value})
  }
  onSubmit(e){
    e.preventDefault()
    this.props.onSubmit(this.state)
  }
  render() {
    const { selectedId } = this.state
    const {
      buttonTextLabel
    } = this.props || { buttonTextLabel: "Entrar" }

    return (
      <div className= { styles.DropdownButton }>
        <select onChange={ this.onSelectItem.bind(this) }>
          <option>
            Seleccione
          </option>
          {items.map(function(row, item){
            <option value={row.id}> {row.text}</option>
          })}
        </select>
        <ButtonCmp>
          { buttonTextLabel }
        </ButtonCmp>
      </div>
    )
  }
}

export default DropdownButton


