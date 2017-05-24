import React, {Component } from 'react'
import DeleteButton from './DeleteButton'
import './Thing.css'

class Thing extends Component {
  render(){
    const props = this.props
     return (
    <li className="Thing">
      <input 
        type="checkbox" 
        checked={props.thing.checked} 
        onClick={props.checkIt} 
        id={props.thing.id} 
        readOnly="true"
      />
      <div className="details">
        <div className="name">
          {props.thing.name}
            <DeleteButton 
              deleteThings={props.deleteThings} 
              thisid={props.thing.id} 
            />
            <input
              className="date"
              id={props.thing.id}
              type="date"
              onBlur={props.addDate}
              defaultValue={props.thing.date}
            />  
        </div>
      </div>
    </li>
  )
  }
}

export default Thing