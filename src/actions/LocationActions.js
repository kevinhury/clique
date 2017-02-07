import Permissions from 'react-native-permissions'

import {
	LOCATION_CURRENT_USER_FETCHED,
	LOCATION_PERMISSION_REQUEST,
	LOCATION_PERMISSION_AUTHORIZED,
	LOCATION_PERMISSION_DENIED,
} from './types'

export const requestLocationPermissions = () => {
	return (dispatch) => {
		dispatch({ type: LOCATION_PERMISSION_REQUEST })
		Permissions.requestPermission('location').then(
			permission => {
				if (permission === 'authorized') {
					dispatch({ type: LOCATION_PERMISSION_AUTHORIZED })
				} else if (permission === 'denied') {
					dispatch({ type: LOCATION_PERMISSION_DENIED})
				}
			}
		)
	}
}

export const requestUserLocation = () => {
	return (dispatch) => {
		navigator.geolocation.getCurrentPosition(
			position => {
				const location = { latitude: position.coords.latitude, longitude: position.coords.longitude }
				dispatch({ type: LOCATION_CURRENT_USER_FETCHED, location })
			},
			() => {
				dispatch({ type: LOCATION_PERMISSION_DENIED })
			}
		)
	}
}