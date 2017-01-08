import Contacts from 'react-native-contacts'
import {
	CONTACTS_PERMISSION_CHECK,
	CONTACTS_PERMISSION_REQUEST,
	CONTACTS_PERMISSION_AUTHORIZED,
	CONTACTS_PERMISSION_DENIED,
	CONTACTS_PERMISSION_UNDEFINED,
} from './types'

export const checkPermissions = () => {
	return (dispatch) => {
		dispatch({ type: CONTACTS_PERMISSION_CHECK })
		Contacts.checkPermission((err, permission) => {
			switch (permission) {
			case 'undefined':
				console.log('undefined')
				dispatch({ type: CONTACTS_PERMISSION_UNDEFINED })
				break
			case 'authorized':
				console.log('authorized')
				dispatch({ type: CONTACTS_PERMISSION_AUTHORIZED })
				break
			case 'denied':
				console.log('denied')
				dispatch({ type: CONTACTS_PERMISSION_DENIED })
				break
			default:
				console.log('default')
			}
		})
	}
}

export const requestPermission = () => {
	return (dispatch) => {
		dispatch({ type: CONTACTS_PERMISSION_REQUEST })
		Contacts.requestPermission((err, permission) => {
			switch (permission) {
			case 'undefined':
				console.log('undefined')
				dispatch({ type: CONTACTS_PERMISSION_UNDEFINED })
				break
			case 'authorized':
				console.log('authorized')
				dispatch({ type: CONTACTS_PERMISSION_AUTHORIZED })
				break
			case 'denied':
				console.log('denied')
				dispatch({ type: CONTACTS_PERMISSION_DENIED })
				break
			default:
				console.log('default')
			}
		})
	}
}
