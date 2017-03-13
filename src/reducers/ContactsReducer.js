import {
	CONTACTS_LIST_FETCHED,
} from '../actions/types'

export type Contact = {
	recordID: number,
	name: string,
	phone: string,
	thumnbail: string,
}

const INITIAL_STATE: Contact[] = []

export const ContactsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CONTACTS_LIST_FETCHED:
			return action.contacts
		default:
			return state
	}
}
