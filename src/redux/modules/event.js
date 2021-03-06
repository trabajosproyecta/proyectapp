import { Actions } from "react-native-router-flux"

import { doFetch } from "./fetching"
import { newError } from "./error"
import { LOGOUT_SUCCESS } from "./authentication"
import { getDate, getTime } from "../../utils/datetime"
import { ToastActionsCreators } from "react-native-redux-toast";

const SET_EVENTS = "SET_EVENTS"

const type = "EVENT"
const initialState = {
  fetching: false,
  error: false,
  data: [],
}

export default function event(state = initialState, action) {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        ...action.payload,
      }
    case `${type}_FETCH_START`:
      return {
        ...state,
        fetching: true,
      }
    case `${type}_FETCH_END`:
      return {
        ...state,
        fetching: false,
      }
    case `${type}_SET_ERROR`:
      return {
        ...state,
        error: action.payload,
      }
    case LOGOUT_SUCCESS:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

function setEvents(events) {
  return {
    type: SET_EVENTS,
    payload: {
      data: events.map(event => ({
        ...event,
        title: event.name,
        date: getDate(event.start),
        time: getTime(event.start),
      })),
    },
  }
}

function fetchEvents(api) {
  return api.get("/event")
}
function fetchAllEvents(api) {
  return api.get("/event/all")
}

function createEvent(api, data) {
  return api.post("/event", data)
}

export function getEvents() {
  return async (dispatch, getState, api) => {
    let fetchFunction
    if (getState().authentication.data.isAdmin) {
      fetchFunction = fetchAllEvents
    } else {
      fetchFunction = fetchEvents
    }
    const response = await doFetch(
      dispatch,
      fetchFunction(api.api.withToken(getState().authentication.token)),
      type
    )
    if (response.error) {
      newError(dispatch, { e: response.error }, type)
    } else {
      dispatch(setEvents(response.events))
    }
  }
}

export function newEvent(data) {
  return async (dispatch, getState, api) => {
    const response = await doFetch(
      dispatch,
      createEvent(api.api.withToken(getState().authentication.token), data),
      type,
      { status: getState().netinfo.online, content: data, post: true }
    )
    if (response.error) {
      newError(dispatch, { e: response.error }, type)
    } else {
      dispatch(ToastActionsCreators.displayInfo("Evento creado correctamente"))
      dispatch(getEvents())
      Actions.popTo("calendarIndex")
    }
  }
}
