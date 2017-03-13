// @flow

import {
	CONTACTS_LIST_FETCHED,
} from '../actions/types'
import type { Contact, Action } from '../actions/types'

const INITIAL_STATE: Contact[] = []

export const ContactsReducer = (state: Contact[] = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case CONTACTS_LIST_FETCHED:
			return action.contacts
		default:
			return state
	}
}
