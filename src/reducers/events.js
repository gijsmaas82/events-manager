import { EVENTS_FETCHED } from '../actions/events'
import { EVENT_CREATE_SUCCESS } from '../actions/events'
import { EVENT_DELETE_SUCCESS } from '../actions/events'
import { EVENT_UPDATE_SUCCESS } from '../actions/events'

const reducer = (state = null, action = {}) => {
  switch(action.type) {
    case EVENTS_FETCHED: 
      return state = action.events
    case EVENT_CREATE_SUCCESS:
      if (state === null) {
        return state
      } else {
        return [...state,{...action.event}]
      }
    case EVENT_DELETE_SUCCESS:
      return state.filter(event => event.id !== action.event)
    case EVENT_UPDATE_SUCCESS:
      return state.map(event => {
        if (event.id === action.event.id) {
          return action.event
        } else {
          return event
        }
      })
    default:
      return state
  }
}

export default reducer