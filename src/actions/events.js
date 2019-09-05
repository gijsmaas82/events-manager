import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'

const baseUrl = 'http://localhost:4000'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
})

export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events) return

  // a GET /events request
  request(`${baseUrl}/event`)
    .then(response => {
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body))
    })
    .catch(console.error)
}

export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
})

export const createEvent = (data) => dispatch => {
  request
    .post(`${baseUrl}/event`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}

export const EVENT_FETCHED = 'EVENT_FETCHED'

const eventFetched = events => ({
  type: EVENT_FETCHED,
  events
})

export const loadEvent = (id) => (dispatch) => {
  request(`${baseUrl}/event/${id}`)
    .then(response => {
      dispatch(eventFetched(response.body))
    })
    .catch(console.error)
}

export const EVENT_DELETE_SUCCESS = 'EVENT_DELETE_SUCCESS'

const eventDeleted = event => ({
  type: EVENT_DELETE_SUCCESS,
  event
})

export const deleteEvent = (id) => (dispatch) => {
  request
    .delete(`${baseUrl}/event/${id}`)
    .then(response => {
      dispatch(eventDeleted(id))
    })
}

export const EVENT_UPDATE_SUCCESS = 'EVENT_UPDATE_SUCCESS'

const eventUpdated = event => ({
  type: EVENT_UPDATE_SUCCESS,
  event
})

export const updateEvent = (id, data) => (dispatch) => {
  request
    .put(`${baseUrl}/event/${id}`)
    .send(data)
    .then(response => {
      dispatch(eventUpdated(response.body))
    })
}