// @flow

import type { Action } from '../actions/types'
import * as ActionTypes from '../actions/types'

export const INITIAL_STATE: SessionState = {
	authenticating: true,
	authenticated: false,
	accessToken: null,
	username: null,
	pid: null,
}

type SessionState = {
	authenticating: boolean,
	authenticated: boolean,
	accessToken: ?string,
	username: ?string,
	pid: ?string,
}

export const SessionReducer = (state: SessionState = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case ActionTypes.USER_NOT_REGISTERED:
			return { ...state, authenticating: false, authenticated: false }
		case ActionTypes.AUTHENTICATION_REQUEST:
			return { ...state, authenticating: true, authenticated: false }
		case ActionTypes.AUTHENTICATION_SUCCESS:
			return { ...INITIAL_STATE, authenticating: false, authenticated: true, pid: action.pid, accessToken: action.accessToken }
		case ActionTypes.AUTHENTICATION_FAILURE:
			return { ...INITIAL_STATE }
		case ActionTypes.LOGIN_SUBMIT_VERIFICATION_SUCCESS:
			return { ...INITIAL_STATE, authenticating: false, authenticated: true, accessToken: action.accessToken, pid: action.pid }
		default:
			return state
	}
}