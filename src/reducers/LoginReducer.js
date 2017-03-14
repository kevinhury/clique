// @flow

import type { Action, CountryCode } from '../actions/types'
import {
	LOGIN_CHANGE_COUNTRY,
	LOGIN_CHANGE_NUMBER,
} from '../actions/types'

const INITIAL_STATE = {
	phoneNumber: '',
	countryCode: {
		cca2: 'US',
		callingCode: '1',
		name: 'United States',
	},
}

type State = {
	phoneNumber: string,
	countryCode: ?CountryCode,
}

export const LoginReducer = (state: State = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case LOGIN_CHANGE_COUNTRY:
			return { ...state, countryCode: action.country }
		case LOGIN_CHANGE_NUMBER:
			return { ...state, phoneNumber: action.number }
		default:
			return state
	}
}
