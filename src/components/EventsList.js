import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventsList extends Component {
  render() {
    return (
      <div>
         {!this.props.events && 'Loading'}

         {this.props.events && 
          <ul>{this.props.events.map(event => {
            return <li><Link to={`/events/${event.id}`} >{event.name}</Link></li>
          })}</ul>
        }
      </div>
    )
  }
}
