import {
	CONTACTS_PERMISSION_SUCCESS,
	CONTACTS_PERMISSION_DENIED,
	CONTACTS_LIST_FETCHED,
} from '../actions/types'

export type Contact = {
	recordID: number,
	name: string,
	phone: string,
	thumnbail: string,
}

export type State = {
	contacts: Contact[],
	permission: Permission,
}

export type Permission = 
		'undetermined'
	| 'authorized'
	| 'denied'

const INITIAL_STATE: State = {
	contacts: [],
	permission: 'undetermined',
}

export const ContactsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case CONTACTS_PERMISSION_SUCCESS:
		return { ...state, permission: 'authorized' }
	case CONTACTS_PERMISSION_DENIED:
		return { ...state, permission: 'denied' }
	case CONTACTS_LIST_FETCHED:
		return { ...state, contacts: action.contacts }
	default:
		return state
	}
}
