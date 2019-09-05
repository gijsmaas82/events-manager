import { combineReducers } from 'redux'
import events from './events'
import eventDetails from './eventDetails'

export default combineReducers({
  events,
  eventDetails
})