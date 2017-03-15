// @flow

import type { Permission, Action } from '../actions/types'
import {
	LOCATION_PERMISSION_CHECK,
	LOCATION_PERMISSION_REQUEST,
	LOCATION_PERMISSION_AUTHORIZED,
	LOCATION_PERMISSION_DENIED,
	LOCATION_CURRENT_USER_FETCHED,
	CONTACTS_PERMISSION_CHECK,
	CONTACTS_PERMISSION_REQUEST,
	CONTACTS_PERMISSION_AUTHORIZED,
	CONTACTS_PERMISSION_DENIED,
} from '../actions/types'

type State = {
	contacts: Permission,
	location: Permission,
}

const INITIAL_STATE: State = {
	contacts: 'undetermined',
	location: 'undetermined',
}


export const PermissionsReducer = (state: State = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case LOCATION_PERMISSION_REQUEST:
		case LOCATION_PERMISSION_CHECK:
			return { ...state, location: 'undetermined' }
		case LOCATION_CURRENT_USER_FETCHED:
		case LOCATION_PERMISSION_AUTHORIZED:
			return { ...state, location: 'authorized' }
		case LOCATION_PERMISSION_DENIED:
			return { ...state, location: 'denied' }
		case CONTACTS_PERMISSION_CHECK:
		case CONTACTS_PERMISSION_REQUEST:
			return { ...state, contacts: 'undetermined' }
		case CONTACTS_PERMISSION_AUTHORIZED:
			return { ...state, contacts: 'authorized' }
		case CONTACTS_PERMISSION_DENIED:
			return { ...state, contacts: 'denied' }
		default:
			return state
	}
}