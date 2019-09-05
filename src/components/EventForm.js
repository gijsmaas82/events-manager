import React, { Component } from 'react'

export default class EventForm extends Component {
  render() {
    return(
      <form onSubmit={this.props.onSubmit}>
        Name: <input type="text" name="name" onChange={this.props.onChange} value={this.props.values.name} />
        Date: <input type="text" name="date" onChange={this.props.onChange} value={this.props.values.date} />
        Description: <input type="text" name="description" onChange={this.props.onChange} value={this.props.values.description} />
        <button >Submit</button> 
      </form>
    )
  }
}