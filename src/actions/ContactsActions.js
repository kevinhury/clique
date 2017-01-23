import Permissions from 'react-native-permissions'
import Contacts from 'react-native-contacts'
import {
	CONTACTS_PERMISSION_CHECK,
	CONTACTS_PERMISSION_REQUEST,
	CONTACTS_PERMISSION_AUTHORIZED,
	CONTACTS_PERMISSION_DENIED,
	CONTACTS_LIST_FETCHED,
} from './types'

export const checkPermissions = () => {
	return (dispatch) => {
		dispatch({ type: CONTACTS_PERMISSION_CHECK })
		Permissions.getPermissionStatus('contacts').then((err, permission) => {
			if (permission === 'authorized') {
				dispatch({ type: CONTACTS_PERMISSION_AUTHORIZED })
			} else if (permission === 'denied') {
				dispatch({ type: CONTACTS_PERMISSION_DENIED })
			}
		})
	}
}

export const requestPermission = () => {
	return (dispatch) => {
		dispatch({ type: CONTACTS_PERMISSION_REQUEST })
		Permissions.requestPermission('contacts').then(permission => {
			if (permission === 'authorized') {
				dispatch({ type: CONTACTS_PERMISSION_AUTHORIZED })
				Contacts.getAll((err, contacts) => {
					contacts = contacts.map(x => {
						return {
							recordId: x.recordID,
							name: `${x.givenName}  ${x.familyName}`,
							phone: x.phoneNumbers[0].number,
							thumnbail: x.thumbnailPath,
						}
					})
					dispatch({ type: CONTACTS_LIST_FETCHED, contacts })
				})
			} else if (permission === 'denied') {
				dispatch({ type: CONTACTS_PERMISSION_DENIED })
			}
		})
	}
}
