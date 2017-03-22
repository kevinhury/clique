import Contacts from 'react-native-contacts'
import {
	CONTACTS_PERMISSION_CHECK,
	CONTACTS_PERMISSION_REQUEST,
	CONTACTS_PERMISSION_AUTHORIZED,
	CONTACTS_PERMISSION_DENIED,
	CONTACTS_LIST_FETCHED,
} from './types'

export const requestContactList = () =>
	(dispatch: (Object) => void) => {
		checkPermission(dispatch)
	}

const checkPermission = (dispatch) => {
	dispatch({ type: CONTACTS_PERMISSION_CHECK })
	Contacts.checkPermission((err, permission) => {
		if (permission === 'undefined') {
			requestPermission(dispatch)
		} else if (permission === 'authorized') {
			dispatch({ type: CONTACTS_PERMISSION_AUTHORIZED })
			requestContacts(dispatch)
		} else if (permission === 'denied') {
			dispatch({ type: CONTACTS_PERMISSION_DENIED })
		}
	})
}

const requestPermission = (dispatch) => {
	dispatch({ type: CONTACTS_PERMISSION_REQUEST })
	Contacts.requestPermission((err, permission) => {
		if (permission === 'authorized') {
			requestContacts(dispatch)
		} else if (permission === 'denied') {
			dispatch({ type: CONTACTS_PERMISSION_DENIED })
		}
	})
}

const requestContacts = (dispatch) => {
	Contacts.getAll((err, contacts) => {
		contacts = contacts.map(x => {
			return {
				recordId: x.recordID,
				name: `${x.givenName} ${x.familyName}`,
				phone: x.phoneNumbers[0].number,
				thumbnail: x.thumbnailPath,
			}
		})
		dispatch({ type: CONTACTS_LIST_FETCHED, contacts })
	})
}