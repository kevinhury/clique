import {
	FORM_ADD_CONTACT,
	FORM_REMOVE_CONTACT,
	FORM_CHANGE_NAME,
	FORM_CHANGE_DESCRIPTION,
	FORM_CHANGE_LOCATION,
	FORM_ADD_DATE,
	FORM_REMOVE_DATE,
} from '../actions/types'

export type Contact = {

}

export type State = {
	name: string,
	description: string,
	location: string,
	dates: Array<Date>,
	minAtendees: number,
	maxAtendees: number,
	contacts: Array<Contact>,
	deadline: number
}

export const INITIAL_STATE: State = {
	name: '',
	description: '',
	location: '',
	dates: [],
	minAtendees: 0,
	maxAtendees: 0,
	contacts: [],
	deadline: 0,
}

export const EventFormReducer = (state = INITIAL_STATE, action): State => {
	switch (action.type) {
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
	case FORM_CHANGE_LOCATION: {
		return { ...state, location: action.location }
	}
	case FORM_ADD_DATE: {
		const dates = [...state.dates, action.date]
		return { ...state, dates }
	}
	case FORM_REMOVE_DATE: {
		const dates = state.dates.filter(d => d !== action.date)
		return { ...state, dates }
	}
	default:
		return state
	}
}
