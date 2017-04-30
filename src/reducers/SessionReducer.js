// @flow

import type { Action } from '../actions/types'
import * as ActionTypes from '../actions/types'

export const INITIAL_STATE: SessionState = {
	authenticating: true,
	authenticated: false,
	accessToken: null,
	username: null,
	pid: null,
	image: null,
	phone: null,
}

type SessionState = {
	authenticating: boolean,
	authenticated: boolean,
	accessToken: ?string,
	username: ?string,
	pid: ?string,
	image: ?string,
	phone: ?string,
}

export const SessionReducer = (state: SessionState = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case ActionTypes.USER_NOT_REGISTERED:
			return { ...state, authenticating: false, authenticated: false }
		case ActionTypes.AUTHENTICATION_REQUEST:
			return { ...state, authenticating: true, authenticated: false }
		case ActionTypes.AUTHENTICATION_SUCCESS: {
			const { pid, accessToken, username, phone, image } = action
			return { ...INITIAL_STATE, authenticating: false, authenticated: true, pid, accessToken, username, phone, image }
		}
		case ActionTypes.AUTHENTICATION_FAILURE:
			return { ...INITIAL_STATE }
		case ActionTypes.LOGIN_SUBMIT_VERIFICATION_SUCCESS: {
			const { pid, accessToken, username, phone, image } = action
			return { ...INITIAL_STATE, authenticating: false, authenticated: true, pid, accessToken, username, phone, image }
		}
		default:
			return state
	}
}