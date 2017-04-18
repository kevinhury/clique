// @flow

import type { Action, CountryCode } from '../actions/types'
import {
	LOGIN_CHANGE_COUNTRY,
	LOGIN_CHANGE_NUMBER,
	LOGIN_SUBMIT_PHONE,
	LOGIN_SUBMIT_PHONE_BACK,
	LOGIN_SUBMIT_RESPONSE,
	LOGIN_SUBMIT_VERIFICATION_REQUEST,
	LOGIN_SUBMIT_VERIFICATION_SUCCESS,
	LOGIN_SUBMIT_VERIFICATION_FAILURE,
} from '../actions/types'

export const INITIAL_STATE: State = {
	phoneNumber: '',
	countryCode: {
		cca2: 'US',
		callingCode: '1',
		name: 'United States',
	},
	loginStage: 'PHONE',
	loading: false,
}

type State = {
	phoneNumber: string,
	countryCode: ?CountryCode,
	loginStage: string,
	loading: boolean,
}

export const LoginReducer = (state: State = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case LOGIN_CHANGE_COUNTRY:
			return { ...state, countryCode: action.country }
		case LOGIN_CHANGE_NUMBER:
			return { ...state, phoneNumber: action.number }
		case LOGIN_SUBMIT_PHONE:
			return { ...state, loading: true }
		case LOGIN_SUBMIT_PHONE_BACK:
			return { ...state, loginStage: 'PHONE', loading: false }
		case LOGIN_SUBMIT_RESPONSE:
			return { ...state, loginStage: 'CODE', loading: false }
		case LOGIN_SUBMIT_VERIFICATION_REQUEST:
			return { ...state, loading: true }
		case LOGIN_SUBMIT_VERIFICATION_SUCCESS:
			return { ...state, loginStage: 'DONE', loading: false }
		case LOGIN_SUBMIT_VERIFICATION_FAILURE:
			return { ...state, loginStage: 'PHONE', loading: false }
		default:
			return state
	}
}
