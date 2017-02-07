import {
	LOCATION_PERMISSION_CHECK,
	LOCATION_PERMISSION_REQUEST,
	LOCATION_PERMISSION_AUTHORIZED,
	LOCATION_PERMISSION_DENIED,
	CONTACTS_PERMISSION_CHECK,
	CONTACTS_PERMISSION_REQUEST,
	CONTACTS_PERMISSION_SUCCESS,
	CONTACTS_PERMISSION_DENIED,
} from '../actions/types'

export type Permission =
	'undetermined'
	| 'authorized'
	| 'denied'

type State = {
	contacts: Permission,
	location: Permission,
}

const INITIAL_STATE: State = {
	contacts: 'undetermined',
	location: 'undetermined',
}


export const PermissionsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case LOCATION_PERMISSION_CHECK | LOCATION_PERMISSION_REQUEST:
		return { ...state, location: 'undetermined' }
	case LOCATION_PERMISSION_AUTHORIZED:
		return { ...state, location: 'authorized' }
	case LOCATION_PERMISSION_DENIED:
		return { ...state, location: 'denied' }
	case CONTACTS_PERMISSION_CHECK | CONTACTS_PERMISSION_REQUEST:
		return { ...state, contacts: 'undetermined' }
	case CONTACTS_PERMISSION_SUCCESS:
		return { ...state, contacts: 'authorized' }
	case CONTACTS_PERMISSION_DENIED:
		return { ...state, contacts: 'denied' }
	default:
		return state
	}
}