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

export type Contact = {

}

export type Location = {
	latitude: number,
	longitude: number,
	address: string,
}

export type FormType =
	'CREATE'
	| 'MODIFY'

export type State = {
	name: string,
	description: string,
	locationName: string,
	location: Location,
	dates: Array<Date>,
	minAtendees: number,
	maxAtendees: number,
	contacts: Array<Contact>,
	length: number,
	startTime: string,
	deadline: number,
	type: FormType,
}

export const INITIAL_STATE: State = {
	name: '',
	description: '',
	locationName: '',
	location: {},
	dates: [],
	minAtendees: 0,
	maxAtendees: 0,
	contacts: [],
	length: 0,
	startTime: '',
	deadline: 0,
	type: 'CREATE',
}

export const EventFormReducer = (state = INITIAL_STATE, action): State => {
	switch (action.type) {
		case FORM_CREATE: {
			return { ...state, INITIAL_STATE }
		}
		case FORM_MODIFY: {
			var event = {}
			event.name = action.event.title
			event.description = action.event.description
			event.location = action.event.location
			event.locationName = action.event.locationName
			event.minAtendees = action.event.minAtendees
			event.maxAtendees = action.event.limitedRSVPs
			event.contacts = action.event.invitees
			return { event, type: 'MODIFY' }
		}
		case FORM_CANCEL: {
			return { ...state, INITIAL_STATE }
		}
		case FORM_ADD_CONTACT: {
			const contacts = [...state.contacts, action.contactId]
			return { ...state, contacts }
		}
		case FORM_REMOVE_CONTACT: {
			const contacts = state.contacts.filter(c => c !== action.contactId)
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
			const dates = state.dates.filter(d => {
				return d.getTime() !== action.date.getTime()
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
			console.log(location)
			return { ...state, location }
		}
		default:
			return state
	}
}
