// @flow

import moment from 'moment'
import type { UserEvent, EventForm, Action } from '../actions/types'
import {
	USER_EVENTS_REQUEST,
	USER_EVENTS_REQUEST_SUCCESS,
	USER_EVENT_SELECTED,
	USER_EVENT_ATTENDANCES_MODIFIED_RESPONSE,
	USER_EVENT_CANCEL,
	USER_EVENT_CANCEL_RESPONSE,
	FORM_SELECT_TO_REVIEW,
} from '../actions/types'

type State = {
	loading: boolean,
	error: boolean,
	list: Array<UserEvent>,
	selected: ?UserEvent,
}

export const INITIAL_STATE: State = {
	loading: false,
	error: false,
	list: [],
	selected: null,
}

export const EventsReducer = (state: State = INITIAL_STATE, action: Action): State => {
	switch (action.type) {
		case USER_EVENTS_REQUEST:
			return { ...state, loading: true, error: false, selected: null }
		case USER_EVENTS_REQUEST_SUCCESS:
			return { ...state, list: action.list, loading: false, error: false, selected: null }
		case USER_EVENT_SELECTED:
			return { ...state, selected: action.selected }
		case FORM_SELECT_TO_REVIEW:
			return { ...state, selected: mapEventFormToEvent(action.form) }
		case USER_EVENT_ATTENDANCES_MODIFIED_RESPONSE: {
			const eventId = action.eventId
			const list = [...state.list]
			let selected = list.filter((x) => x.id === eventId)[0]
			const index = list.indexOf(selected)
			selected = { ...selected, approved: action.status }
			list[index] = selected
			return { ...state, list, selected }
		}
		case USER_EVENT_CANCEL:
		case USER_EVENT_CANCEL_RESPONSE:
			return { ...state } // TODO: remove event from list
		default:
			return state
	}
}

const mapEventFormToEvent = (form: EventForm): any => {
	var event = {}
	event.title = form.name
	event.description = form.description
	event.locationName = form.locationName
	event.location = form.location
	event.dates = form.dates
	event.minAtendees = form.minAtendees
	event.limitedRSVP = form.maxAtendees
	event.invitees = form.contacts
	event.lengthInDays = form.length
	event.expires = moment(form.dates[0]).add(form.deadline, 'hours')
	event.approved = 'Pending'
	event.status = 'Pending'
	event.owner = 'You'
	event.isAdmin = false
	return event
}
