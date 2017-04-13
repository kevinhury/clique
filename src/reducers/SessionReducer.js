// @flow

import type { Action } from '../actions/types'
import * as ActionTypes from '../actions/types'

export const INITIAL_STATE: SessionState = {
	authenticating: false,
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
		case ActionTypes.AUTHENTICATION_REQUEST:
			return { ...INITIAL_STATE, authenticating: true }
		case ActionTypes.AUTHENTICATION_SUCCESS:
			return { ...INITIAL_STATE, accessToken: action.accessToken, username: action.username, pid: action.pid }
		case ActionTypes.AUTHENTICATION_FAILURE:
			return { ...INITIAL_STATE }
		default:
			return state
	}
}