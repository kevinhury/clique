// @flow

import moment from 'moment'
import {
	FORM_CREATE,
	FORM_MODIFY,
	FORM_CANCEL,
	FORM_ADD_CONTACT,
	FORM_REMOVE_CONTACT,
	FORM_CHANGE_NAME,
	FORM_CHANGE_DESCRIPTION,
	FORM_CHANGE_LOCATION_NAME,
	FORM_CHANGE_LOCATION,
	FORM_ADD_DATE,
	FORM_REMOVE_DATE,
	FORM_CHANGE_LENGTH,
	FORM_CHANGE_START_TIME,
	FORM_CHANGE_RSVP_DEADLINE,
	FORM_CHANGE_MIN_ATENDEES,
	FORM_CHANGE_MAX_ATENDEES,
	LOCATION_CURRENT_USER_FETCHED,
} from '../actions/types'
import type { UserEvent, EventForm, Action } from '../actions/types'


export const INITIAL_STATE: EventForm = {
	name: '',
	description: '',
	locationName: '',
	location: { address: '', latitude: 0, longitude: 0 },
	dates: [],
	minAtendees: 0,
	maxAtendees: 0,
	contacts: [],
	length: 0,
	startTime: '',
	deadline: 0,
	type: 'INACTIVE',
}

export const EventFormReducer = (state: EventForm = INITIAL_STATE, action: Action): EventForm => {
	switch (action.type) {
		case FORM_CREATE: {
			return { ...state, INITIAL_STATE, type: 'CREATE' }
		}
		case FORM_MODIFY: {
			const event = mapEventToEventForm(action.event)
			return { ...event, type: 'MODIFY' }
		}
		case FORM_CANCEL: {
			return { ...state, INITIAL_STATE, type: 'INACTIVE' }
		}
		case FORM_ADD_CONTACT: {
			const contacts = [...state.contacts, action.contact]
			return { ...state, contacts }
		}
		case FORM_REMOVE_CONTACT: {
			const contact = action.contact
			const contacts = state.contacts.filter(c => c !== contact)
			return { ...state, contacts }
		}
		case FORM_CHANGE_NAME:
			return { ...state, name: action.name }
		case FORM_CHANGE_DESCRIPTION: {
			return { ...state, description: action.description }
		}
		case FORM_CHANGE_LOCATION_NAME: {
			return { ...state, locationName: action.locationName }
		}
		case FORM_CHANGE_LOCATION: {
			return { ...state, location: action.location }
		}
		case FORM_ADD_DATE: {
			const dates = [...state.dates, action.date]
			return { ...state, dates }
		}
		case FORM_REMOVE_DATE: {
			const date = action.date
			const dates = state.dates.filter(d => {
				return d.getTime() !== date.getTime()
			})
			return { ...state, dates }
		}
		case FORM_CHANGE_LENGTH: {
			return { ...state, length: action.length }
		}
		case FORM_CHANGE_START_TIME: {
			return { ...state, startTime: action.startTime }
		}
		case FORM_CHANGE_RSVP_DEADLINE: {
			return { ...state, deadline: action.deadline }
		}
		case FORM_CHANGE_MIN_ATENDEES: {
			return { ...state, minAtendees: action.atendees }
		}
		case FORM_CHANGE_MAX_ATENDEES: {
			return { ...state, maxAtendees: action.atendees }
		}
		case LOCATION_CURRENT_USER_FETCHED: {
			const location = {
				...state.location,
				latitude: action.location.latitude,
				longitude: action.location.longitude,
			}
			return { ...state, location }
		}
		default:
			return state
	}
}

const mapEventToEventForm = (event: UserEvent): any => {
	var form = {}
	form.name = event.title
	form.description = event.description
	form.locationName = event.locationName
	form.location = event.location
	form.dates = event.dates
	form.minAtendees = event.minAtendees
	form.maxAtendees = event.limitedRSVP
	form.contacts = event.invitees
	form.length = event.lengthInDays
	form.startTime = moment(event.dates[0]).format('HH:mm')
	form.deadline = `${moment(event.expires).format('HH') - form.startTime}`
	form.type = 'CREATE'
	return form
}

/*
const mock_initial_state = {
	name: 'On the fire',
	description: 'We\'re going to have a great time!!',
	locationName: 'My Place',
	location: { address: 'Malkat shva, Ashdod', latitude: 0, longitude: 0 },
	dates: [new Date()],
	minAtendees: 3,
	maxAtendees: 10,
	contacts: [],
	length: 1,
	startTime: '14:30',
	deadline: 4,
	type: 'CREATE',
}
*/