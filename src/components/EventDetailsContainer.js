import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent, updateEvent, deleteEvent} from '../actions/events'

class EventDetailsContainer extends React.Component {
  state = {
    name: '',
    date: '',
    description: ''
  }

  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onDelete = () => {
    this.props.deleteEvent(this.props.event.id)
    this.props.history.push('/')
  }

  onUpdate = (event) => {
    event.preventDefault()
    this.props.updateEvent(this.props.match.params.id, this.state)
    this.setState({
      name: '',
      date: '',
      description: ''
    })
    this.props.history.push('/')
  }

  render() {
    return <EventDetails event={this.props.event} 
      onDelete={this.onDelete} 
      onUpdate={this.onUpdate}
      onChange={this.onChange}
      values={this.state} />
  }
}

const mapStateToProps = state => ({
  event: state.eventDetails
})

export default connect(mapStateToProps, {loadEvent, deleteEvent, updateEvent})(EventDetailsContainer)