import React, { Component } from 'react'

export default class EventDetails extends Component {
  state = {
    editMode: false
  } 

  onEdit = () => {
    this.setState({
      editMode: true
    })
  }
  render() {
    return (
      <div>
        {!this.props.event && 'loading'}
        {this.props.event && !this.state.editMode ? <div><h1>{this.props.event.name}</h1>
        <i>{this.props.event.date}</i>
        <p>{this.props.event.description}</p>
        <button onClick={this.props.onDelete} >Delete this event</button>
        <button onClick={this.onEdit} > Edit this event </button></div>:
        <div><p> Update the event </p>
        <form onSubmit={this.props.onUpdate}>
        Name: <input type="text" name="name" onChange={this.props.onChange} value={this.props.values.name} />
        Date: <input type="text" name="date" onChange={this.props.onChange} value={this.props.values.date} />
        Description: <input type="text" name="description" onChange={this.props.onChange} value={this.props.values.description} />
        <button >Submit</button> 
        </form>
        </div>
        }
      </div>
    )
  }
}
